// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/A.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

export interface Foo {
  baz: number;
  fooBars: string[];
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Foo = {
  /**
   * Serializes Foo to protobuf.
   */
  encode: function (msg: PartialDeep<Foo>): Uint8Array {
    return Foo._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Foo from protobuf.
   */
  decode: function (bytes: ByteSource): Foo {
    return Foo._readMessage(
      Foo.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Foo with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Foo>): Foo {
    return {
      baz: 0,
      fooBars: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Foo>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.baz) {
      writer.writeInt32(1, msg.baz);
    }
    if (msg.fooBars?.length) {
      writer.writeRepeatedString(2, msg.fooBars);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Foo, reader: protoscript.BinaryReader): Foo {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.baz = reader.readInt32();
          break;
        }
        case 2: {
          msg.fooBars.push(reader.readString());
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

export const FooJSON = {
  /**
   * Serializes Foo to JSON.
   */
  encode: function (msg: PartialDeep<Foo>): string {
    return JSON.stringify(FooJSON._writeMessage(msg));
  },

  /**
   * Deserializes Foo from JSON.
   */
  decode: function (json: string): Foo {
    return FooJSON._readMessage(FooJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Foo with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Foo>): Foo {
    return {
      baz: 0,
      fooBars: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Foo>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    json["baz"] = msg.baz;
    json["foo_bars"] = msg.fooBars;
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Foo, json: any): Foo {
    const _baz_ = json["baz"];
    if (_baz_) {
      msg.baz = protoscript.parseNumber(_baz_);
    }
    const _fooBars_ = json["fooBars"] ?? json["foo_bars"];
    if (_fooBars_) {
      msg.fooBars = _fooBars_;
    }
    return msg;
  },
};
