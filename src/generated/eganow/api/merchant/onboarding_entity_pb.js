// source: eganow/api/merchant/onboarding_entity.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.eganow.api.merchant.MerchantAccount', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.eganow.api.merchant.MerchantAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.eganow.api.merchant.MerchantAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.eganow.api.merchant.MerchantAccount.displayName = 'proto.eganow.api.merchant.MerchantAccount';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.eganow.api.merchant.MerchantAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.eganow.api.merchant.MerchantAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.eganow.api.merchant.MerchantAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerguid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
    emailaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    personalbusinessgroup: jspb.Message.getFieldWithDefault(msg, 5, ""),
    personalbusinessgroupvalue: jspb.Message.getFieldWithDefault(msg, 6, 0),
    firstname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    businessname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    languageid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    customerpinhash: jspb.Message.getFieldWithDefault(msg, 11, ""),
    userjwttoken: jspb.Message.getFieldWithDefault(msg, 12, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 13, ""),
    countrydialcode: jspb.Message.getFieldWithDefault(msg, 14, 0),
    issuccess: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    message: jspb.Message.getFieldWithDefault(msg, 16, ""),
    passwordexistvalue: jspb.Message.getFieldWithDefault(msg, 17, ""),
    registermodemobilewebussd: jspb.Message.getFieldWithDefault(msg, 18, ""),
    idcardstatus: jspb.Message.getFieldWithDefault(msg, 19, ""),
    operatingcountryyesno: jspb.Message.getFieldWithDefault(msg, 20, ""),
    customerprofilepicimageurl: jspb.Message.getFieldWithDefault(msg, 21, ""),
    mobilenumberoremailexist: jspb.Message.getFieldWithDefault(msg, 22, 0),
    jwtnoofminutes: jspb.Message.getFieldWithDefault(msg, 23, 0),
    apiversionno: jspb.Message.getFieldWithDefault(msg, 24, 0),
    appversionno: jspb.Message.getFieldWithDefault(msg, 25, ""),
    appupdaterequirementstatus: jspb.Message.getFieldWithDefault(msg, 26, ""),
    customerstatus: jspb.Message.getFieldWithDefault(msg, 27, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.eganow.api.merchant.MerchantAccount}
 */
proto.eganow.api.merchant.MerchantAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.eganow.api.merchant.MerchantAccount;
  return proto.eganow.api.merchant.MerchantAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.eganow.api.merchant.MerchantAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.eganow.api.merchant.MerchantAccount}
 */
proto.eganow.api.merchant.MerchantAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerguid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailaddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonalbusinessgroup(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPersonalbusinessgroupvalue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerpinhash(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserjwttoken(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountrydialcode(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccess(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswordexistvalue(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistermodemobilewebussd(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdcardstatus(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperatingcountryyesno(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerprofilepicimageurl(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMobilenumberoremailexist(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJwtnoofminutes(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApiversionno(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppversionno(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppupdaterequirementstatus(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerstatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.eganow.api.merchant.MerchantAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.eganow.api.merchant.MerchantAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.eganow.api.merchant.MerchantAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerguid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmailaddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPersonalbusinessgroup();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPersonalbusinessgroupvalue();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBusinessname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLanguageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCustomerpinhash();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUserjwttoken();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCountrydialcode();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getIssuccess();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPasswordexistvalue();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getRegistermodemobilewebussd();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getIdcardstatus();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getOperatingcountryyesno();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getCustomerprofilepicimageurl();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getMobilenumberoremailexist();
  if (f !== 0) {
    writer.writeInt32(
      22,
      f
    );
  }
  f = message.getJwtnoofminutes();
  if (f !== 0) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = message.getApiversionno();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getAppversionno();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getAppupdaterequirementstatus();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getCustomerstatus();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
};


/**
 * optional string CustomerGuid = 1;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getCustomerguid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setCustomerguid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CustomerId = 2;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string MobileNumber = 3;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string EmailAddress = 4;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getEmailaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setEmailaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string PersonalBusinessGroup = 5;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getPersonalbusinessgroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setPersonalbusinessgroup = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 PersonalBusinessGroupValue = 6;
 * @return {number}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getPersonalbusinessgroupvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setPersonalbusinessgroupvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string FirstName = 7;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string LastName = 8;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string BusinessName = 9;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getBusinessname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setBusinessname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string LanguageId = 10;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getLanguageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setLanguageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string CustomerPINHash = 11;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getCustomerpinhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setCustomerpinhash = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string UserJwtToken = 12;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getUserjwttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setUserjwttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string CountryCode = 13;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 CountryDialCode = 14;
 * @return {number}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getCountrydialcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setCountrydialcode = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional bool IsSuccess = 15;
 * @return {boolean}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getIssuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setIssuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string Message = 16;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string PasswordExistValue = 17;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getPasswordexistvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setPasswordexistvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string RegisterModeMobileWebUssd = 18;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getRegistermodemobilewebussd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setRegistermodemobilewebussd = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string IdCardStatus = 19;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getIdcardstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setIdcardstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string OperatingCountryYesNo = 20;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getOperatingcountryyesno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setOperatingcountryyesno = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string CustomerProfilePicImageUrl = 21;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getCustomerprofilepicimageurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setCustomerprofilepicimageurl = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional int32 MobileNumberOrEmailExist = 22;
 * @return {number}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getMobilenumberoremailexist = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setMobilenumberoremailexist = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional int32 JwtNoOfMinutes = 23;
 * @return {number}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getJwtnoofminutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setJwtnoofminutes = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int32 ApiVersionNo = 24;
 * @return {number}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getApiversionno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setApiversionno = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional string AppversionNo = 25;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getAppversionno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setAppversionno = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string AppUpdateRequirementStatus = 26;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getAppupdaterequirementstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setAppupdaterequirementstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string CustomerStatus = 27;
 * @return {string}
 */
proto.eganow.api.merchant.MerchantAccount.prototype.getCustomerstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.eganow.api.merchant.MerchantAccount} returns this
 */
proto.eganow.api.merchant.MerchantAccount.prototype.setCustomerstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


goog.object.extend(exports, proto.eganow.api.merchant);
