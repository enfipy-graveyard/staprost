const grpc = require('grpc')

const services = require('../gen/chat_grpc_pb')
const messages = require('../gen/chat_pb')

const server = new grpc.Server()

server.addService(services.ChatService, {
	sayHello(call, callback){
    const name = call.request.getName()

    const helloResponse = new messages.SayHelloResponse()
    helloResponse.setHello(`Hello, ${name}`)

    callback(null, helloResponse)
	}
})

server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure())

server.start()
console.log('gRPC running on:', '0.0.0.0:50050')
