const grpc = require('grpc')

const proto = grpc.load('proto/chat.proto')
const server = new grpc.Server()

server.addService(proto.chat.Chat.service, {
	sayHello(call, callback){
    const name = call.request.name
    callback(null, `Hello, ${name}`)
	}
})

server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure())

server.start()
console.log('gRPC running on:', '0.0.0.0:50050')
