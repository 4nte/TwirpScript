// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/haberdasher.proto
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

/**
 * Size of a Hat, in inches.
 */
export interface Size {
  /**
   * must be > 0
   */
  inches: number;
}

/**
 * A Hat is a piece of headwear made by a Haberdasher.
 */
export interface Hat {
  inches: number;
  /**
   * anything but "invisible"
   */
  color: string;
  /**
   * i.e. "bowler"
   */
  name: string;
}

//========================================//
//      Haberdasher Protobuf Client       //
//========================================//

/**
 * MakeHat produces a hat of mysterious, randomly-selected color!
 */
export async function MakeHat(
  size: Size,
  config?: ClientConfiguration,
): Promise<Hat> {
  const response = await PBrequest(
    "/Haberdasher/MakeHat",
    Size.encode(size),
    config,
  );
  return Hat.decode(response);
}

//========================================//
//        Haberdasher JSON Client         //
//========================================//

/**
 * MakeHat produces a hat of mysterious, randomly-selected color!
 */
export async function MakeHatJSON(
  size: Size,
  config?: ClientConfiguration,
): Promise<Hat> {
  const response = await JSONrequest(
    "/Haberdasher/MakeHat",
    SizeJSON.encode(size),
    config,
  );
  return HatJSON.decode(response);
}

//========================================//
//              Haberdasher               //
//========================================//

/**
 * Haberdasher service makes hats for clients.
 */
export interface Haberdasher<Context = unknown> {
  /**
   * MakeHat produces a hat of mysterious, randomly-selected color!
   */
  MakeHat: (size: Size, context: Context) => Promise<Hat> | Hat;
}

export function createHaberdasher<Context>(service: Haberdasher<Context>) {
  return {
    name: "Haberdasher",
    methods: {
      MakeHat: {
        name: "MakeHat",
        handler: service.MakeHat,
        input: { protobuf: Size, json: SizeJSON },
        output: { protobuf: Hat, json: HatJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Size = {
  /**
   * Serializes Size to protobuf.
   */
  encode: function (msg: PartialDeep<Size>): Uint8Array {
    return Size._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Size from protobuf.
   */
  decode: function (bytes: ByteSource): Size {
    return Size._readMessage(
      Size.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Size with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Size>): Size {
    return {
      inches: 0,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Size>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Size, reader: protoscript.BinaryReader): Size {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.inches = reader.readInt32();
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

export const Hat = {
  /**
   * Serializes Hat to protobuf.
   */
  encode: function (msg: PartialDeep<Hat>): Uint8Array {
    return Hat._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Hat from protobuf.
   */
  decode: function (bytes: ByteSource): Hat {
    return Hat._readMessage(
      Hat.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Hat with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Hat>): Hat {
    return {
      inches: 0,
      color: "",
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Hat>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
    if (msg.color) {
      writer.writeString(2, msg.color);
    }
    if (msg.name) {
      writer.writeString(3, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Hat, reader: protoscript.BinaryReader): Hat {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.inches = reader.readInt32();
          break;
        }
        case 2: {
          msg.color = reader.readString();
          break;
        }
        case 3: {
          msg.name = reader.readString();
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

export const SizeJSON = {
  /**
   * Serializes Size to JSON.
   */
  encode: function (msg: PartialDeep<Size>): string {
    return JSON.stringify(SizeJSON._writeMessage(msg));
  },

  /**
   * Deserializes Size from JSON.
   */
  decode: function (json: string): Size {
    return SizeJSON._readMessage(SizeJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Size with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Size>): Size {
    return {
      inches: 0,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Size>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.inches) {
      json["inches"] = msg.inches;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Size, json: any): Size {
    const _inches_ = json["inches"];
    if (_inches_) {
      msg.inches = protoscript.parseNumber(_inches_);
    }
    return msg;
  },
};

export const HatJSON = {
  /**
   * Serializes Hat to JSON.
   */
  encode: function (msg: PartialDeep<Hat>): string {
    return JSON.stringify(HatJSON._writeMessage(msg));
  },

  /**
   * Deserializes Hat from JSON.
   */
  decode: function (json: string): Hat {
    return HatJSON._readMessage(HatJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Hat with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Hat>): Hat {
    return {
      inches: 0,
      color: "",
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Hat>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.inches) {
      json["inches"] = msg.inches;
    }
    if (msg.color) {
      json["color"] = msg.color;
    }
    if (msg.name) {
      json["name"] = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Hat, json: any): Hat {
    const _inches_ = json["inches"];
    if (_inches_) {
      msg.inches = protoscript.parseNumber(_inches_);
    }
    const _color_ = json["color"];
    if (_color_) {
      msg.color = _color_;
    }
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};
