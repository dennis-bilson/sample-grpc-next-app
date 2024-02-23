// package: eganow.api.merchant
// file: eganow/api/merchant/onboarding_entity.proto

import * as jspb from "google-protobuf";

export class MerchantAccount extends jspb.Message {
  getCustomerguid(): string;
  setCustomerguid(value: string): void;

  getCustomerid(): string;
  setCustomerid(value: string): void;

  getMobilenumber(): string;
  setMobilenumber(value: string): void;

  getEmailaddress(): string;
  setEmailaddress(value: string): void;

  getPersonalbusinessgroup(): string;
  setPersonalbusinessgroup(value: string): void;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  getBusinessname(): string;
  setBusinessname(value: string): void;

  getLanguageid(): string;
  setLanguageid(value: string): void;

  getCustomerpinhash(): string;
  setCustomerpinhash(value: string): void;

  getUserjwttoken(): string;
  setUserjwttoken(value: string): void;

  getCountrycode(): string;
  setCountrycode(value: string): void;

  getCountrydialcode(): number;
  setCountrydialcode(value: number): void;

  getIssuccess(): boolean;
  setIssuccess(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  getPasswordexistvalue(): string;
  setPasswordexistvalue(value: string): void;

  getRegistermodemobilewebussd(): string;
  setRegistermodemobilewebussd(value: string): void;

  getIdcardstatus(): string;
  setIdcardstatus(value: string): void;

  getOperatingcountryyesno(): string;
  setOperatingcountryyesno(value: string): void;

  getCustomerprofilepicimageurl(): string;
  setCustomerprofilepicimageurl(value: string): void;

  getMobilenumberoremailexist(): number;
  setMobilenumberoremailexist(value: number): void;

  getJwtnoofminutes(): number;
  setJwtnoofminutes(value: number): void;

  getApiversionno(): number;
  setApiversionno(value: number): void;

  getAppversionno(): string;
  setAppversionno(value: string): void;

  getAppupdaterequirementstatus(): string;
  setAppupdaterequirementstatus(value: string): void;

  getCustomerstatus(): string;
  setCustomerstatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantAccount.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantAccount): MerchantAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerchantAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantAccount;
  static deserializeBinaryFromReader(message: MerchantAccount, reader: jspb.BinaryReader): MerchantAccount;
}

export namespace MerchantAccount {
  export type AsObject = {
    customerguid: string,
    customerid: string,
    mobilenumber: string,
    emailaddress: string,
    personalbusinessgroup: string,
    personalbusinessgroupvalue: number,
    firstname: string,
    lastname: string,
    businessname: string,
    languageid: string,
    customerpinhash: string,
    userjwttoken: string,
    countrycode: string,
    countrydialcode: number,
    issuccess: boolean,
    message: string,
    passwordexistvalue: string,
    registermodemobilewebussd: string,
    idcardstatus: string,
    operatingcountryyesno: string,
    customerprofilepicimageurl: string,
    mobilenumberoremailexist: number,
    jwtnoofminutes: number,
    apiversionno: number,
    appversionno: string,
    appupdaterequirementstatus: string,
    customerstatus: string,
  }
}

