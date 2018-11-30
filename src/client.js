const grpc = require('grpc')
const readline = require("readline");

const services = require('../gen/chat_grpc_pb')
const messages = require('../gen/chat_pb')

const client = new services.ChatClient('localhost:50050', grpc.credentials.createInsecure())

var username
var stream

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const startChat = () => {
  const message = new messages.MessagesRequest()

  message.setUsername(username)
  message.setMessage(`${username} joined`)

  stream = client.messages(message)

  stream.write(message)
  stream.on("data", onMessage)
  rl.on("line", onWrite)
}

const onMessage = res => {
  if (res.getUsername() == username) {
    return
  }
  console.log(`${res.getUsername()}: ${res.getMessage()}`);
}

const onWrite = text => {
  const message = new messages.MessagesRequest()

  message.setUsername(username)
  message.setMessage(text)

  stream.write(message)
}

rl.question("What is your name? ", answer => {
  username = answer
  startChat()
})
