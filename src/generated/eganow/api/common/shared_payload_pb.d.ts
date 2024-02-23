// package: eganow.api.common
// file: eganow/api/common/shared_payload.proto

import * as jspb from "google-protobuf";

export class GetCountriesRequest extends jspb.Message {
  getFilter(): CountryFilterMap[keyof CountryFilterMap];
  setFilter(value: CountryFilterMap[keyof CountryFilterMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesRequest): GetCountriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCountriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesRequest;
  static deserializeBinaryFromReader(message: GetCountriesRequest, reader: jspb.BinaryReader): GetCountriesRequest;
}

export namespace GetCountriesRequest {
  export type AsObject = {
    filter: CountryFilterMap[keyof CountryFilterMap],
  }
}

export class Country extends jspb.Message {
  getCountryCode(): string;
  setCountryCode(value: string): void;

  getCountryName(): string;
  setCountryName(value: string): void;

  getCurrencyIso(): string;
  setCurrencyIso(value: string): void;

  getCountryFlagUrl(): string;
  setCountryFlagUrl(value: string): void;

  getMinMobileNumberLength(): number;
  setMinMobileNumberLength(value: number): void;

  getMaxMobileNumberLength(): number;
  setMaxMobileNumberLength(value: number): void;

  getDialCode(): string;
  setDialCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    countryCode: string,
    countryName: string,
    currencyIso: string,
    countryFlagUrl: string,
    minMobileNumberLength: number,
    maxMobileNumberLength: number,
    dialCode: string,
  }
}

export class GetCountriesResponse extends jspb.Message {
  clearCountriesList(): void;
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): void;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesResponse): GetCountriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesResponse;
  static deserializeBinaryFromReader(message: GetCountriesResponse, reader: jspb.BinaryReader): GetCountriesResponse;
}

export namespace GetCountriesResponse {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export interface CountryFilterMap {
  COUNTRY_FILTER_UNSPECIFIED: 0;
  COUNTRY_FILTER_SIGNUP: 1;
  COUNTRY_FILTER_OPERATING: 2;
}

export const CountryFilter: CountryFilterMap;

