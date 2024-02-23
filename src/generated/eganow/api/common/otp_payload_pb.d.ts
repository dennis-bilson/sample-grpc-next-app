// package: eganow.api.common
// file: eganow/api/common/otp_payload.proto

import * as jspb from "google-protobuf";

export class SendOTPRequest extends jspb.Message {
  getBusinessEmailAddress(): string;
  setBusinessEmailAddress(value: string): void;

  getPurpose(): OtpGenerationPurposeMap[keyof OtpGenerationPurposeMap];
  setPurpose(value: OtpGenerationPurposeMap[keyof OtpGenerationPurposeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendOTPRequest): SendOTPRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendOTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOTPRequest;
  static deserializeBinaryFromReader(message: SendOTPRequest, reader: jspb.BinaryReader): SendOTPRequest;
}

export namespace SendOTPRequest {
  export type AsObject = {
    businessEmailAddress: string,
    purpose: OtpGenerationPurposeMap[keyof OtpGenerationPurposeMap],
  }
}

export class VerifyOTPRequest extends jspb.Message {
  getBusinessEmailAddress(): string;
  setBusinessEmailAddress(value: string): void;

  getOtp(): string;
  setOtp(value: string): void;

  getPurpose(): OtpGenerationPurposeMap[keyof OtpGenerationPurposeMap];
  setPurpose(value: OtpGenerationPurposeMap[keyof OtpGenerationPurposeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPRequest): VerifyOTPRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyOTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPRequest;
  static deserializeBinaryFromReader(message: VerifyOTPRequest, reader: jspb.BinaryReader): VerifyOTPRequest;
}

export namespace VerifyOTPRequest {
  export type AsObject = {
    businessEmailAddress: string,
    otp: string,
    purpose: OtpGenerationPurposeMap[keyof OtpGenerationPurposeMap],
  }
}

export interface OtpGenerationPurposeMap {
  OTP_GEN_UNSPECIFIED: 0;
  OTP_GEN_SIGNUP: 1;
  OTP_GEN_TRANSACTION: 2;
}

export const OtpGenerationPurpose: OtpGenerationPurposeMap;

