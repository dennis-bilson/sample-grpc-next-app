// package: eganow.api.customer
// file: eganow/api/customer/onboarding_payload.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";

export class CreateCustomerRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getMobileNumber(): string;
  setMobileNumber(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getTin(): string;
  setTin(value: string): void;

  getPostalZipCode(): string;
  setPostalZipCode(value: string): void;

  getStreetAddress(): string;
  setStreetAddress(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getProvinceState(): string;
  setProvinceState(value: string): void;

  getDigitalAddress(): string;
  setDigitalAddress(value: string): void;

  getSector(): string;
  setSector(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getAuthPin(): string;
  setAuthPin(value: string): void;

  getOtpValue(): string;
  setOtpValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerRequest): CreateCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerRequest;
  static deserializeBinaryFromReader(message: CreateCustomerRequest, reader: jspb.BinaryReader): CreateCustomerRequest;
}

export namespace CreateCustomerRequest {
  export type AsObject = {
    email: string,
    mobileNumber: string,
    firstName: string,
    lastName: string,
    tin: string,
    postalZipCode: string,
    streetAddress: string,
    city: string,
    provinceState: string,
    digitalAddress: string,
    sector: string,
    industry: string,
    countryCode: string,
    password: string,
    authPin: string,
    otpValue: string,
  }
}

export class LoginCustomerRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginCustomerRequest): LoginCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginCustomerRequest;
  static deserializeBinaryFromReader(message: LoginCustomerRequest, reader: jspb.BinaryReader): LoginCustomerRequest;
}

export namespace LoginCustomerRequest {
  export type AsObject = {
    phoneNumber: string,
    password: string,
  }
}

export class AuthCustomerResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getFullName(): string;
  setFullName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getMobileNumber(): string;
  setMobileNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthCustomerResponse): AuthCustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthCustomerResponse;
  static deserializeBinaryFromReader(message: AuthCustomerResponse, reader: jspb.BinaryReader): AuthCustomerResponse;
}

export namespace AuthCustomerResponse {
  export type AsObject = {
    accessToken: string,
    fullName: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
  }
}

export class CheckCustomerAccountRequest extends jspb.Message {
  getMerchantMobileNumber(): string;
  setMerchantMobileNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCustomerAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCustomerAccountRequest): CheckCustomerAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckCustomerAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCustomerAccountRequest;
  static deserializeBinaryFromReader(message: CheckCustomerAccountRequest, reader: jspb.BinaryReader): CheckCustomerAccountRequest;
}

export namespace CheckCustomerAccountRequest {
  export type AsObject = {
    merchantMobileNumber: string,
  }
}

