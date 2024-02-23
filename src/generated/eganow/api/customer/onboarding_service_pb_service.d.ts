// package: eganow.api.customer
// file: eganow/api/customer/onboarding_service.proto

import * as eganow_api_customer_onboarding_service_pb from "../../../eganow/api/customer/onboarding_service_pb";
import * as eganow_api_customer_onboarding_payload_pb from "../../../eganow/api/customer/onboarding_payload_pb";
import * as eganow_api_customer_common_pb from "../../../eganow/api/customer/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CustomerOnboardingSvcCreateCustomerAccount = {
  readonly methodName: string;
  readonly service: typeof CustomerOnboardingSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest;
  readonly responseType: typeof eganow_api_customer_common_pb.CustomerStringValue;
};

type CustomerOnboardingSvcLoginCustomer = {
  readonly methodName: string;
  readonly service: typeof CustomerOnboardingSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest;
  readonly responseType: typeof eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse;
};

type CustomerOnboardingSvcCheckIfCustomerAccountExist = {
  readonly methodName: string;
  readonly service: typeof CustomerOnboardingSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest;
  readonly responseType: typeof eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse;
};

export class CustomerOnboardingSvc {
  static readonly serviceName: string;
  static readonly CreateCustomerAccount: CustomerOnboardingSvcCreateCustomerAccount;
  static readonly LoginCustomer: CustomerOnboardingSvcLoginCustomer;
  static readonly CheckIfCustomerAccountExist: CustomerOnboardingSvcCheckIfCustomerAccountExist;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CustomerOnboardingSvcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createCustomerAccount(
    requestMessage: eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_customer_common_pb.CustomerStringValue|null) => void
  ): UnaryResponse;
  createCustomerAccount(
    requestMessage: eganow_api_customer_onboarding_payload_pb.CreateCustomerRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_customer_common_pb.CustomerStringValue|null) => void
  ): UnaryResponse;
  loginCustomer(
    requestMessage: eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse|null) => void
  ): UnaryResponse;
  loginCustomer(
    requestMessage: eganow_api_customer_onboarding_payload_pb.LoginCustomerRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse|null) => void
  ): UnaryResponse;
  checkIfCustomerAccountExist(
    requestMessage: eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse|null) => void
  ): UnaryResponse;
  checkIfCustomerAccountExist(
    requestMessage: eganow_api_customer_onboarding_payload_pb.CheckCustomerAccountRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_customer_onboarding_payload_pb.AuthCustomerResponse|null) => void
  ): UnaryResponse;
}

