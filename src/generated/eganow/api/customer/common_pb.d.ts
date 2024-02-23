// package: eganow.api.customer
// file: eganow/api/customer/common.proto

import * as jspb from "google-protobuf";

export class CustomerEmpty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerEmpty.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerEmpty): CustomerEmpty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerEmpty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerEmpty;
  static deserializeBinaryFromReader(message: CustomerEmpty, reader: jspb.BinaryReader): CustomerEmpty;
}

export namespace CustomerEmpty {
  export type AsObject = {
  }
}

export class CustomerStringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerStringValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerStringValue): CustomerStringValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerStringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerStringValue;
  static deserializeBinaryFromReader(message: CustomerStringValue, reader: jspb.BinaryReader): CustomerStringValue;
}

export namespace CustomerStringValue {
  export type AsObject = {
    value: string,
  }
}

