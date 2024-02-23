// package: eganow.api.customer
// file: eganow/api/customer/customer_service.proto

var eganow_api_customer_customer_service_pb = require("../../../eganow/api/customer/customer_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CustomerAccountOnboardingSvc = (function () {
  function CustomerAccountOnboardingSvc() {}
  CustomerAccountOnboardingSvc.serviceName = "eganow.api.customer.CustomerAccountOnboardingSvc";
  return CustomerAccountOnboardingSvc;
}());

exports.CustomerAccountOnboardingSvc = CustomerAccountOnboardingSvc;

function CustomerAccountOnboardingSvcClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.CustomerAccountOnboardingSvcClient = CustomerAccountOnboardingSvcClient;

