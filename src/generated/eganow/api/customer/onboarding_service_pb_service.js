// package: eganow.api.customer
// file: eganow/api/customer/onboarding_service.proto

var eganow_api_customer_onboarding_service_pb = require("../../../eganow/api/customer/onboarding_service_pb");
var eganow_api_customer_onboarding_payload_pb = require("../../../eganow/api/customer/onboarding_payload_pb");
var eganow_api_customer_common_pb = require("../../../eganow/api/customer/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CustomerOnboardingSvc = (function () {
  function CustomerOnboardingSvc() {}
  CustomerOnboardingSvc.serviceName = "eganow.api.customer.CustomerOnboardingSvc";
  return CustomerOnboardingSvc;
}());

CustomerOnboardingSvc.CreateCustomerAccount = {
  methodName: "CreateCustomerAccount",
  service: CustomerOnboardingSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest,
  responseType: eganow_api_customer_common_pb.CustomerStringValue
};

CustomerOnboardingSvc.LoginCustomer = {
  methodName: "LoginCustomer",
  service: CustomerOnboardingSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest,
  responseType: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse
};

CustomerOnboardingSvc.CheckIfCustomerAccountExist = {
  methodName: "CheckIfCustomerAccountExist",
  service: CustomerOnboardingSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest,
  responseType: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse
};

exports.CustomerOnboardingSvc = CustomerOnboardingSvc;

function CustomerOnboardingSvcClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CustomerOnboardingSvcClient.prototype.createCustomerAccount = function createCustomerAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerOnboardingSvc.CreateCustomerAccount, {
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

CustomerOnboardingSvcClient.prototype.loginCustomer = function loginCustomer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerOnboardingSvc.LoginCustomer, {
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

CustomerOnboardingSvcClient.prototype.checkIfCustomerAccountExist = function checkIfCustomerAccountExist(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerOnboardingSvc.CheckIfCustomerAccountExist, {
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

exports.CustomerOnboardingSvcClient = CustomerOnboardingSvcClient;

