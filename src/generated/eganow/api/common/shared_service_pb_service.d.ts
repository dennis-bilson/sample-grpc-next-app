// package: eganow.api.common
// file: eganow/api/common/shared_service.proto

import * as eganow_api_common_shared_service_pb from "../../../eganow/api/common/shared_service_pb";
import * as eganow_api_common_shared_payload_pb from "../../../eganow/api/common/shared_payload_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CommonDataSvcGetCountries = {
  readonly methodName: string;
  readonly service: typeof CommonDataSvc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof eganow_api_common_shared_payload_pb.GetCountriesRequest;
  readonly responseType: typeof eganow_api_common_shared_payload_pb.GetCountriesResponse;
};

export class CommonDataSvc {
  static readonly serviceName: string;
  static readonly GetCountries: CommonDataSvcGetCountries;
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

export class CommonDataSvcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getCountries(
    requestMessage: eganow_api_common_shared_payload_pb.GetCountriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: eganow_api_common_shared_payload_pb.GetCountriesResponse|null) => void
  ): UnaryResponse;
  getCountries(
    requestMessage: eganow_api_common_shared_payload_pb.GetCountriesRequest,
    callback: (error: ServiceError|null, responseMessage: eganow_api_common_shared_payload_pb.GetCountriesResponse|null) => void
  ): UnaryResponse;
}

