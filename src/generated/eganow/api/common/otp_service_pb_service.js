// package: eganow.api.common
// file: eganow/api/common/otp_service.proto

var eganow_api_common_otp_service_pb = require("../../../eganow/api/common/otp_service_pb");
var eganow_api_common_otp_payload_pb = require("../../../eganow/api/common/otp_payload_pb");
var eganow_api_common_common_pb = require("../../../eganow/api/common/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OtpSvc = (function () {
  function OtpSvc() {}
  OtpSvc.serviceName = "eganow.api.common.OtpSvc";
  return OtpSvc;
}());

OtpSvc.SendOTP = {
  methodName: "SendOTP",
  service: OtpSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_common_otp_payload_pb.SendOTPRequest,
  responseType: eganow_api_common_common_pb.CommonStringValue
};

OtpSvc.VerifyOTP = {
  methodName: "VerifyOTP",
  service: OtpSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_common_otp_payload_pb.VerifyOTPRequest,
  responseType: eganow_api_common_common_pb.CommonStringValue
};

exports.OtpSvc = OtpSvc;

function OtpSvcClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OtpSvcClient.prototype.sendOTP = function sendOTP(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OtpSvc.SendOTP, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OtpSvcClient.prototype.verifyOTP = function verifyOTP(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OtpSvc.VerifyOTP, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.OtpSvcClient = OtpSvcClient;

