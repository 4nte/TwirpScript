// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/authentication.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";

//========================================//
//                 Types                  //
//========================================//

export interface CurrentUser {
  username: string;
  token: string;
}

export interface Credentials {
  username: string;
  password: string;
}

//========================================//
//     Authentication Protobuf Client     //
//========================================//

/**
 * Login in a user
 */
export async function Login(
  credentials: Credentials,
  config?: ClientConfiguration,
): Promise<CurrentUser> {
  const response = await PBrequest(
    "/Authentication/Login",
    Credentials.encode(credentials),
    config,
  );
  return CurrentUser.decode(response);
}

//========================================//
//       Authentication JSON Client       //
//========================================//

/**
 * Login in a user
 */
export async function LoginJSON(
  credentials: Credentials,
  config?: ClientConfiguration,
): Promise<CurrentUser> {
  const response = await JSONrequest(
    "/Authentication/Login",
    CredentialsJSON.encode(credentials),
    config,
  );
  return CurrentUserJSON.decode(response);
}

//========================================//
//             Authentication             //
//========================================//

export interface Authentication<Context = unknown> {
  /**
   * Login in a user
   */
  Login: (
    credentials: Credentials,
    context: Context,
  ) => Promise<CurrentUser> | CurrentUser;
}

export function createAuthentication<Context>(
  service: Authentication<Context>,
) {
  return {
    name: "Authentication",
    methods: {
      Login: {
        name: "Login",
        handler: service.Login,
        input: { protobuf: Credentials, json: CredentialsJSON },
        output: { protobuf: CurrentUser, json: CurrentUserJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const CurrentUser = {
  /**
   * Serializes CurrentUser to protobuf.
   */
  encode: function (msg: PartialDeep<CurrentUser>): Uint8Array {
    return CurrentUser._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CurrentUser from protobuf.
   */
  decode: function (bytes: ByteSource): CurrentUser {
    return CurrentUser._readMessage(
      CurrentUser.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CurrentUser with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CurrentUser>): CurrentUser {
    return {
      username: "",
      token: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CurrentUser>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.username) {
      writer.writeString(1, msg.username);
    }
    if (msg.token) {
      writer.writeString(2, msg.token);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CurrentUser,
    reader: protoscript.BinaryReader,
  ): CurrentUser {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.username = reader.readString();
          break;
        }
        case 2: {
          msg.token = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const Credentials = {
  /**
   * Serializes Credentials to protobuf.
   */
  encode: function (msg: PartialDeep<Credentials>): Uint8Array {
    return Credentials._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Credentials from protobuf.
   */
  decode: function (bytes: ByteSource): Credentials {
    return Credentials._readMessage(
      Credentials.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Credentials with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Credentials>): Credentials {
    return {
      username: "",
      password: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Credentials>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.username) {
      writer.writeString(1, msg.username);
    }
    if (msg.password) {
      writer.writeString(2, msg.password);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: Credentials,
    reader: protoscript.BinaryReader,
  ): Credentials {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.username = reader.readString();
          break;
        }
        case 2: {
          msg.password = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const CurrentUserJSON = {
  /**
   * Serializes CurrentUser to JSON.
   */
  encode: function (msg: PartialDeep<CurrentUser>): string {
    return JSON.stringify(CurrentUserJSON._writeMessage(msg));
  },

  /**
   * Deserializes CurrentUser from JSON.
   */
  decode: function (json: string): CurrentUser {
    return CurrentUserJSON._readMessage(
      CurrentUserJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CurrentUser with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CurrentUser>): CurrentUser {
    return {
      username: "",
      token: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CurrentUser>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.username) {
      json["username"] = msg.username;
    }
    if (msg.token) {
      json["token"] = msg.token;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CurrentUser, json: any): CurrentUser {
    const _username_ = json["username"];
    if (_username_) {
      msg.username = _username_;
    }
    const _token_ = json["token"];
    if (_token_) {
      msg.token = _token_;
    }
    return msg;
  },
};

export const CredentialsJSON = {
  /**
   * Serializes Credentials to JSON.
   */
  encode: function (msg: PartialDeep<Credentials>): string {
    return JSON.stringify(CredentialsJSON._writeMessage(msg));
  },

  /**
   * Deserializes Credentials from JSON.
   */
  decode: function (json: string): Credentials {
    return CredentialsJSON._readMessage(
      CredentialsJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes Credentials with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Credentials>): Credentials {
    return {
      username: "",
      password: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Credentials>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.username) {
      json["username"] = msg.username;
    }
    if (msg.password) {
      json["password"] = msg.password;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Credentials, json: any): Credentials {
    const _username_ = json["username"];
    if (_username_) {
      msg.username = _username_;
    }
    const _password_ = json["password"];
    if (_password_) {
      msg.password = _password_;
    }
    return msg;
  },
};
