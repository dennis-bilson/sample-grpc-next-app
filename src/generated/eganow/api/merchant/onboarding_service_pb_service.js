// package: eganow.api.merchant
// file: eganow/api/merchant/onboarding_service.proto

var eganow_api_merchant_onboarding_service_pb = require("../../../eganow/api/merchant/onboarding_service_pb");
var eganow_api_merchant_common_pb = require("../../../eganow/api/merchant/common_pb");
var eganow_api_merchant_onboarding_payload_pb = require("../../../eganow/api/merchant/onboarding_payload_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MerchantOnboardingSvc = (function () {
  function MerchantOnboardingSvc() {}
  MerchantOnboardingSvc.serviceName = "eganow.api.merchant.MerchantOnboardingSvc";
  return MerchantOnboardingSvc;
}());

MerchantOnboardingSvc.CreateMerchantAccount = {
  methodName: "CreateMerchantAccount",
  service: MerchantOnboardingSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_merchant_onboarding_payload_pb.CreateMerchantRequest,
  responseType: eganow_api_merchant_onboarding_payload_pb.AuthMerchantResponse
};

MerchantOnboardingSvc.CheckIfMerchantAccountExists = {
  methodName: "CheckIfMerchantAccountExists",
  service: MerchantOnboardingSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_merchant_onboarding_payload_pb.CheckMerchantAccountRequest,
  responseType: eganow_api_merchant_common_pb.MerchantStringValue
};

MerchantOnboardingSvc.LoginMerchant = {
  methodName: "LoginMerchant",
  service: MerchantOnboardingSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_merchant_onboarding_payload_pb.LoginMerchantRequest,
  responseType: eganow_api_merchant_onboarding_payload_pb.AuthMerchantResponse
};

exports.MerchantOnboardingSvc = MerchantOnboardingSvc;

function MerchantOnboardingSvcClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MerchantOnboardingSvcClient.prototype.createMerchantAccount = function createMerchantAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MerchantOnboardingSvc.CreateMerchantAccount, {
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

MerchantOnboardingSvcClient.prototype.checkIfMerchantAccountExists = function checkIfMerchantAccountExists(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MerchantOnboardingSvc.CheckIfMerchantAccountExists, {
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

MerchantOnboardingSvcClient.prototype.loginMerchant = function loginMerchant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MerchantOnboardingSvc.LoginMerchant, {
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

exports.MerchantOnboardingSvcClient = MerchantOnboardingSvcClient;

