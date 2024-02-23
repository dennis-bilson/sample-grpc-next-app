// package: eganow.api.common
// file: eganow/api/common/common.proto

import * as jspb from "google-protobuf";

export class CommonEmpty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonEmpty.AsObject;
  static toObject(includeInstance: boolean, msg: CommonEmpty): CommonEmpty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonEmpty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonEmpty;
  static deserializeBinaryFromReader(message: CommonEmpty, reader: jspb.BinaryReader): CommonEmpty;
}

export namespace CommonEmpty {
  export type AsObject = {
  }
}

export class CommonStringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonStringValue.AsObject;
  static toObject(includeInstance: boolean, msg: CommonStringValue): CommonStringValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonStringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonStringValue;
  static deserializeBinaryFromReader(message: CommonStringValue, reader: jspb.BinaryReader): CommonStringValue;
}

export namespace CommonStringValue {
  export type AsObject = {
    value: string,
  }
}

