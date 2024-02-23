// package: eganow.api.common
// file: eganow/api/common/otp_service.proto

import * as eganow_api_common_otp_service_pb from "../../../eganow/api/common/otp_service_pb";
import * as eganow_api_common_otp_payload_pb from "../../../eganow/api/common/otp_payload_pb";
import * as eganow_api_common_common_pb from "../../../eganow/api/common/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OtpSvcSendOTP = {
  readonly methodName: string;
  readonly service: typeof OtpSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_common_otp_payload_pb.SendOTPRequest;
  readonly responseType: typeof eganow_api_common_common_pb.CommonStringValue;
};

type OtpSvcVerifyOTP = {
  readonly methodName: string;
  readonly service: typeof OtpSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_common_otp_payload_pb.VerifyOTPRequest;
  readonly responseType: typeof eganow_api_common_common_pb.CommonStringValue;
};

export class OtpSvc {
  static readonly serviceName: string;
  static readonly SendOTP: OtpSvcSendOTP;
  static readonly VerifyOTP: OtpSvcVerifyOTP;
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

export class OtpSvcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sendOTP(
    requestMessage: eganow_api_common_otp_payload_pb.SendOTPRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_common_common_pb.CommonStringValue|null) => void
  ): UnaryResponse;
  sendOTP(
    requestMessage: eganow_api_common_otp_payload_pb.SendOTPRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_common_common_pb.CommonStringValue|null) => void
  ): UnaryResponse;
  verifyOTP(
    requestMessage: eganow_api_common_otp_payload_pb.VerifyOTPRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_common_common_pb.CommonStringValue|null) => void
  ): UnaryResponse;
  verifyOTP(
    requestMessage: eganow_api_common_otp_payload_pb.VerifyOTPRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_common_common_pb.CommonStringValue|null) => void
  ): UnaryResponse;
}

