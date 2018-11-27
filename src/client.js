const grpc = require('grpc')

const services = require('../gen/chat_grpc_pb')
const messages = require('../gen/chat_pb')

const client = new services.ChatClient('localhost:50050', grpc.credentials.createInsecure())

const helloRequest = new messages.SayHelloRequest()
helloRequest.setName('my friend')

client.sayHello(helloRequest, (err, res) => {
	if (err) {
    console.log("Error:", err.message)
    return
  }
  console.log(res.getHello())
})
