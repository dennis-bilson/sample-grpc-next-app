// package: eganow.api.merchant
// file: eganow/api/merchant/common.proto

import * as jspb from "google-protobuf";

export class MerchantEmpty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantEmpty.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantEmpty): MerchantEmpty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerchantEmpty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantEmpty;
  static deserializeBinaryFromReader(message: MerchantEmpty, reader: jspb.BinaryReader): MerchantEmpty;
}

export namespace MerchantEmpty {
  export type AsObject = {
  }
}

export class MerchantStringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantStringValue.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantStringValue): MerchantStringValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerchantStringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantStringValue;
  static deserializeBinaryFromReader(message: MerchantStringValue, reader: jspb.BinaryReader): MerchantStringValue;
}

export namespace MerchantStringValue {
  export type AsObject = {
    value: string,
  }
}

