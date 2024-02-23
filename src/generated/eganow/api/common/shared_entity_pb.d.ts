// package: eganow.api.common
// file: eganow/api/common/shared_entity.proto

import * as jspb from "google-protobuf";

export class CountryData extends jspb.Message {
  getCountryname(): string;
  setCountryname(value: string): void;

  getCountrycode(): string;
  setCountrycode(value: string): void;

  getCountrydialcode(): string;
  setCountrydialcode(value: string): void;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): void;

  getCountryflagurl(): string;
  setCountryflagurl(value: string): void;

  getMobilenominlen(): number;
  setMobilenominlen(value: number): void;

  getMobilenomaxlen(): number;
  setMobilenomaxlen(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryData.AsObject;
  static toObject(includeInstance: boolean, msg: CountryData): CountryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryData;
  static deserializeBinaryFromReader(message: CountryData, reader: jspb.BinaryReader): CountryData;
}

export namespace CountryData {
  export type AsObject = {
    countryname: string,
    countrycode: string,
    countrydialcode: string,
    currencyiso: string,
    countryflagurl: string,
    mobilenominlen: number,
    mobilenomaxlen: number,
  }
}

export interface GroupValueMap {
  GROUP_VALUE_UNKNOWN: 0;
  GROUP_VALUE_PERSONAL: 1;
  GROUP_VALUE_BUSINESS: 2;
}

export const GroupValue: GroupValueMap;

export interface AccountLocationValueMap {
  ACCOUNT_LOCATION_UNKNOWN: 0;
  ACCOUNT_LOCATION_INTERNAL: 1;
  ACCOUNT_LOCATION_EXTERNAL: 2;
}

export const AccountLocationValue: AccountLocationValueMap;

export interface ClientPlatformMap {
  CLIENT_UNKNOWN: 0;
  CLIENT_MOBILE: 1;
  CLIENT_WEB: 2;
  CLIENT_API: 3;
}

export const ClientPlatform: ClientPlatformMap;

