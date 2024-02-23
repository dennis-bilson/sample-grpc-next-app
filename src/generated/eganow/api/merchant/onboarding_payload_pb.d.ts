// package: eganow.api.merchant
// file: eganow/api/merchant/onboarding_payload.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";

export class CreateMerchantRequest extends jspb.Message {
  hasPersonalInformation(): boolean;
  clearPersonalInformation(): void;
  getPersonalInformation(): CreateMerchantRequest.PersonalInformation | undefined;
  setPersonalInformation(value?: CreateMerchantRequest.PersonalInformation): void;

  hasBusinessInformation(): boolean;
  clearBusinessInformation(): void;
  getBusinessInformation(): CreateMerchantRequest.BusinessInformation | undefined;
  setBusinessInformation(value?: CreateMerchantRequest.BusinessInformation): void;

  getPassword(): string;
  setPassword(value: string): void;

  getOtpValue(): string;
  setOtpValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMerchantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMerchantRequest): CreateMerchantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMerchantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMerchantRequest;
  static deserializeBinaryFromReader(message: CreateMerchantRequest, reader: jspb.BinaryReader): CreateMerchantRequest;
}

export namespace CreateMerchantRequest {
  export type AsObject = {
    personalInformation?: CreateMerchantRequest.PersonalInformation.AsObject,
    businessInformation?: CreateMerchantRequest.BusinessInformation.AsObject,
    password: string,
    otpValue: string,
  }

  export class PersonalInformation extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): void;

    getMobileNumber(): string;
    setMobileNumber(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonalInformation.AsObject;
    static toObject(includeInstance: boolean, msg: PersonalInformation): PersonalInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonalInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonalInformation;
    static deserializeBinaryFromReader(message: PersonalInformation, reader: jspb.BinaryReader): PersonalInformation;
  }

  export namespace PersonalInformation {
    export type AsObject = {
      email: string,
      mobileNumber: string,
      firstName: string,
      lastName: string,
    }
  }

  export class BusinessInformation extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getMobileNumber(): string;
    setMobileNumber(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusinessInformation.AsObject;
    static toObject(includeInstance: boolean, msg: BusinessInformation): BusinessInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BusinessInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusinessInformation;
    static deserializeBinaryFromReader(message: BusinessInformation, reader: jspb.BinaryReader): BusinessInformation;
  }

  export namespace BusinessInformation {
    export type AsObject = {
      name: string,
      mobileNumber: string,
    }
  }
}

export class CheckMerchantAccountRequest extends jspb.Message {
  hasMerchantEmail(): boolean;
  clearMerchantEmail(): void;
  getMerchantEmail(): string;
  setMerchantEmail(value: string): void;

  hasMerchantMobileNumber(): boolean;
  clearMerchantMobileNumber(): void;
  getMerchantMobileNumber(): string;
  setMerchantMobileNumber(value: string): void;

  getCheckMerchantAccountPayloadCase(): CheckMerchantAccountRequest.CheckMerchantAccountPayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckMerchantAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckMerchantAccountRequest): CheckMerchantAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckMerchantAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckMerchantAccountRequest;
  static deserializeBinaryFromReader(message: CheckMerchantAccountRequest, reader: jspb.BinaryReader): CheckMerchantAccountRequest;
}

export namespace CheckMerchantAccountRequest {
  export type AsObject = {
    merchantEmail: string,
    merchantMobileNumber: string,
  }

  export enum CheckMerchantAccountPayloadCase {
    CHECK_MERCHANT_ACCOUNT_PAYLOAD_NOT_SET = 0,
    MERCHANT_EMAIL = 1,
    MERCHANT_MOBILE_NUMBER = 2,
  }
}

export class LoginMerchantRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginMerchantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginMerchantRequest): LoginMerchantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginMerchantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginMerchantRequest;
  static deserializeBinaryFromReader(message: LoginMerchantRequest, reader: jspb.BinaryReader): LoginMerchantRequest;
}

export namespace LoginMerchantRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class AuthMerchantResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getFullName(): string;
  setFullName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getBusinessName(): string;
  setBusinessName(value: string): void;

  getMerchantId(): string;
  setMerchantId(value: string): void;

  getProfilePicture(): string;
  setProfilePicture(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getMobileNumber(): string;
  setMobileNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthMerchantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthMerchantResponse): AuthMerchantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthMerchantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthMerchantResponse;
  static deserializeBinaryFromReader(message: AuthMerchantResponse, reader: jspb.BinaryReader): AuthMerchantResponse;
}

export namespace AuthMerchantResponse {
  export type AsObject = {
    accessToken: string,
    fullName: string,
    firstName: string,
    lastName: string,
    businessName: string,
    merchantId: string,
    profilePicture: string,
    email: string,
    mobileNumber: string,
  }
}

export class UpdateMerchantAccount extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMerchantAccount.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMerchantAccount): UpdateMerchantAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMerchantAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMerchantAccount;
  static deserializeBinaryFromReader(message: UpdateMerchantAccount, reader: jspb.BinaryReader): UpdateMerchantAccount;
}

export namespace UpdateMerchantAccount {
  export type AsObject = {
  }

  export class BusinessInformation extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getMobileNumber(): string;
    setMobileNumber(value: string): void;

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

    getRegistrationNumber(): string;
    setRegistrationNumber(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusinessInformation.AsObject;
    static toObject(includeInstance: boolean, msg: BusinessInformation): BusinessInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BusinessInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusinessInformation;
    static deserializeBinaryFromReader(message: BusinessInformation, reader: jspb.BinaryReader): BusinessInformation;
  }

  export namespace BusinessInformation {
    export type AsObject = {
      name: string,
      mobileNumber: string,
      postalZipCode: string,
      streetAddress: string,
      city: string,
      provinceState: string,
      digitalAddress: string,
      sector: string,
      industry: string,
      registrationNumber: string,
    }
  }

  export class PersonalInformation extends jspb.Message {
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

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonalInformation.AsObject;
    static toObject(includeInstance: boolean, msg: PersonalInformation): PersonalInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonalInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonalInformation;
    static deserializeBinaryFromReader(message: PersonalInformation, reader: jspb.BinaryReader): PersonalInformation;
  }

  export namespace PersonalInformation {
    export type AsObject = {
      email: string,
      mobileNumber: string,
      firstName: string,
      lastName: string,
      tin: string,
    }
  }
}

