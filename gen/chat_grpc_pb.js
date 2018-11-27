// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_chat_MessagesRequest(arg) {
  if (!(arg instanceof chat_pb.MessagesRequest)) {
    throw new Error('Expected argument of type chat.MessagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_chat_MessagesRequest(buffer_arg) {
  return chat_pb.MessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_MessagesResponse(arg) {
  if (!(arg instanceof chat_pb.MessagesResponse)) {
    throw new Error('Expected argument of type chat.MessagesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_chat_MessagesResponse(buffer_arg) {
  return chat_pb.MessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_SayHelloRequest(arg) {
  if (!(arg instanceof chat_pb.SayHelloRequest)) {
    throw new Error('Expected argument of type chat.SayHelloRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_chat_SayHelloRequest(buffer_arg) {
  return chat_pb.SayHelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_SayHelloResponse(arg) {
  if (!(arg instanceof chat_pb.SayHelloResponse)) {
    throw new Error('Expected argument of type chat.SayHelloResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_chat_SayHelloResponse(buffer_arg) {
  return chat_pb.SayHelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  sayHello: {
    path: '/chat.Chat/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.SayHelloRequest,
    responseType: chat_pb.SayHelloResponse,
    requestSerialize: serialize_chat_SayHelloRequest,
    requestDeserialize: deserialize_chat_SayHelloRequest,
    responseSerialize: serialize_chat_SayHelloResponse,
    responseDeserialize: deserialize_chat_SayHelloResponse,
  },
  messages: {
    path: '/chat.Chat/Messages',
    requestStream: true,
    responseStream: true,
    requestType: chat_pb.MessagesRequest,
    responseType: chat_pb.MessagesResponse,
    requestSerialize: serialize_chat_MessagesRequest,
    requestDeserialize: deserialize_chat_MessagesRequest,
    responseSerialize: serialize_chat_MessagesResponse,
    responseDeserialize: deserialize_chat_MessagesResponse,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
