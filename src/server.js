const grpc = require('grpc')

const services = require('../gen/chat_grpc_pb')
const messages = require('../gen/chat_pb')

const server = new grpc.Server()

const users = []

function notifyChat(res) {
  users.forEach(user => {
		const message = new messages.MessagesResponse()

		message.setUsername(res.getUsername())
		message.setMessage(res.getMessage())

		user.write(message)
  })
}

server.addService(services.ChatService, {
	sayHello(call, callback){
		const name = call.request.getName()

		const helloResponse = new messages.SayHelloResponse()
		helloResponse.setHello(`Hello, ${name}`)

		callback(null, helloResponse)
	},
	messages(stream) {
		console.log(stream)
		users.push(stream)
		stream.on('data', notifyChat)
		stream.on('end', () => {
			stream.end()
		})
	}
})

server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure())

server.start()
console.log('gRPC running on:', '0.0.0.0:50050')
