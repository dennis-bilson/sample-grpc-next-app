// package: eganow.api.common
// file: eganow/api/common/shared_service.proto

var eganow_api_common_shared_service_pb = require("../../../eganow/api/common/shared_service_pb");
var eganow_api_common_shared_payload_pb = require("../../../eganow/api/common/shared_payload_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CommonDataSvc = (function () {
  function CommonDataSvc() {}
  CommonDataSvc.serviceName = "eganow.api.common.CommonDataSvc";
  return CommonDataSvc;
}());

CommonDataSvc.GetCountries = {
  methodName: "GetCountries",
  service: CommonDataSvc,
  requestStream: false,
  responseStream: false,
  requestType: eganow_api_common_shared_payload_pb.GetCountriesRequest,
  responseType: eganow_api_common_shared_payload_pb.GetCountriesResponse
};

exports.CommonDataSvc = CommonDataSvc;

function CommonDataSvcClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CommonDataSvcClient.prototype.getCountries = function getCountries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CommonDataSvc.GetCountries, {
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

exports.CommonDataSvcClient = CommonDataSvcClient;

