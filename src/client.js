const grpc = require('grpc')

const protoPath = require('path').join(__dirname, '..', 'proto')
console.log("proto path : ", protoPath)
const proto = grpc.load({ root: protoPath, file: 'chat.proto' })

const client = new proto.chat.Chat('localhost:50050', grpc.credentials.createInsecure())

client.sayHello({ name: 'my friend' }, (err, res) => {
	if (err) {
    console.log("Error:", err.message)
    return
  }
  console.log(res.hello)
})
