// package: eganow.api.merchant
// file: eganow/api/merchant/onboarding_service.proto

import * as eganow_api_merchant_onboarding_service_pb from "../../../eganow/api/merchant/onboarding_service_pb";
import * as eganow_api_merchant_common_pb from "../../../eganow/api/merchant/common_pb";
import * as eganow_api_merchant_onboarding_payload_pb from "../../../eganow/api/merchant/onboarding_payload_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MerchantOnboardingSvcCreateMerchantAccount = {
  readonly methodName: string;
  readonly service: typeof MerchantOnboardingSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_merchant_onboarding_payload_pb.CreateMerchantRequest;
  readonly responseType: typeof eganow_api_merchant_onboarding_payload_pb.AuthMerchantResponse;
};

type MerchantOnboardingSvcCheckIfMerchantAccountExists = {
  readonly methodName: string;
  readonly service: typeof MerchantOnboardingSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_merchant_onboarding_payload_pb.CheckMerchantAccountRequest;
  readonly responseType: typeof eganow_api_merchant_common_pb.MerchantStringValue;
};

type MerchantOnboardingSvcLoginMerchant = {
  readonly methodName: string;
  readonly service: typeof MerchantOnboardingSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_merchant_onboarding_payload_pb.LoginMerchantRequest;
  readonly responseType: typeof eganow_api_merchant_onboarding_payload_pb.AuthMerchantResponse;
};

export class MerchantOnboardingSvc {
  static readonly serviceName: string;
  static readonly CreateMerchantAccount: MerchantOnboardingSvcCreateMerchantAccount;
  static readonly CheckIfMerchantAccountExists: MerchantOnboardingSvcCheckIfMerchantAccountExists;
  static readonly LoginMerchant: MerchantOnboardingSvcLoginMerchant;
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

export class MerchantOnboardingSvcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createMerchantAccount(
    requestMessage: eganow_api_merchant_onboarding_payload_pb.CreateMerchantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_merchant_onboarding_payload_pb.AuthMerchantResponse|null) => void
  ): UnaryResponse;
  createMerchantAccount(
    requestMessage: eganow_api_merchant_onboarding_payload_pb.CreateMerchantRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_merchant_onboarding_payload_pb.AuthMerchantResponse|null) => void
  ): UnaryResponse;
  checkIfMerchantAccountExists(
    requestMessage: eganow_api_merchant_onboarding_payload_pb.CheckMerchantAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_merchant_common_pb.MerchantStringValue|null) => void
  ): UnaryResponse;
  checkIfMerchantAccountExists(
    requestMessage: eganow_api_merchant_onboarding_payload_pb.CheckMerchantAccountRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_merchant_common_pb.MerchantStringValue|null) => void
  ): UnaryResponse;
  loginMerchant(
    requestMessage: eganow_api_merchant_onboarding_payload_pb.LoginMerchantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_merchant_onboarding_payload_pb.AuthMerchantResponse|null) => void
  ): UnaryResponse;
  loginMerchant(
    requestMessage: eganow_api_merchant_onboarding_payload_pb.LoginMerchantRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_merchant_onboarding_payload_pb.AuthMerchantResponse|null) => void
  ): UnaryResponse;
}

