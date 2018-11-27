// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_chat_MessageStreamRequest(arg) {
  if (!(arg instanceof chat_pb.MessageStreamRequest)) {
    throw new Error('Expected argument of type chat.MessageStreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_chat_MessageStreamRequest(buffer_arg) {
  return chat_pb.MessageStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_MessageStreamResponse(arg) {
  if (!(arg instanceof chat_pb.MessageStreamResponse)) {
    throw new Error('Expected argument of type chat.MessageStreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_chat_MessageStreamResponse(buffer_arg) {
  return chat_pb.MessageStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ** Services **
//
var ChatService = exports.ChatService = {
  messageStream: {
    path: '/chat.Chat/MessageStream',
    requestStream: true,
    responseStream: true,
    requestType: chat_pb.MessageStreamRequest,
    responseType: chat_pb.MessageStreamResponse,
    requestSerialize: serialize_chat_MessageStreamRequest,
    requestDeserialize: deserialize_chat_MessageStreamRequest,
    responseSerialize: serialize_chat_MessageStreamResponse,
    responseDeserialize: deserialize_chat_MessageStreamResponse,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
