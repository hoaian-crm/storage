/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "storage";

export interface IFile {
  content: Uint8Array;
  destination: string;
  filename: string;
}

export interface PutFileResponse {
  url: string;
}

export interface ReadFile {
  filePath: string;
}

export interface ReadFileResponse {
  content: Uint8Array;
}

export interface HealthCheckResult {
  message: string;
}

function createBaseIFile(): IFile {
  return { content: new Uint8Array(0), destination: "", filename: "" };
}

export const IFile = {
  encode(message: IFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destination = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filename = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IFile {
    return {
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(0),
      destination: isSet(object.destination) ? globalThis.String(object.destination) : "",
      filename: isSet(object.filename) ? globalThis.String(object.filename) : "",
    };
  },

  toJSON(message: IFile): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    if (message.destination !== "") {
      obj.destination = message.destination;
    }
    if (message.filename !== "") {
      obj.filename = message.filename;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IFile>, I>>(base?: I): IFile {
    return IFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IFile>, I>>(object: I): IFile {
    const message = createBaseIFile();
    message.content = object.content ?? new Uint8Array(0);
    message.destination = object.destination ?? "";
    message.filename = object.filename ?? "";
    return message;
  },
};

function createBasePutFileResponse(): PutFileResponse {
  return { url: "" };
}

export const PutFileResponse = {
  encode(message: PutFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutFileResponse {
    return { url: isSet(object.url) ? globalThis.String(object.url) : "" };
  },

  toJSON(message: PutFileResponse): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PutFileResponse>, I>>(base?: I): PutFileResponse {
    return PutFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PutFileResponse>, I>>(object: I): PutFileResponse {
    const message = createBasePutFileResponse();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseReadFile(): ReadFile {
  return { filePath: "" };
}

export const ReadFile = {
  encode(message: ReadFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadFile {
    return { filePath: isSet(object.filePath) ? globalThis.String(object.filePath) : "" };
  },

  toJSON(message: ReadFile): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadFile>, I>>(base?: I): ReadFile {
    return ReadFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadFile>, I>>(object: I): ReadFile {
    const message = createBaseReadFile();
    message.filePath = object.filePath ?? "";
    return message;
  },
};

function createBaseReadFileResponse(): ReadFileResponse {
  return { content: new Uint8Array(0) };
}

export const ReadFileResponse = {
  encode(message: ReadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadFileResponse {
    return { content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(0) };
  },

  toJSON(message: ReadFileResponse): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadFileResponse>, I>>(base?: I): ReadFileResponse {
    return ReadFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadFileResponse>, I>>(object: I): ReadFileResponse {
    const message = createBaseReadFileResponse();
    message.content = object.content ?? new Uint8Array(0);
    return message;
  },
};

function createBaseHealthCheckResult(): HealthCheckResult {
  return { message: "" };
}

export const HealthCheckResult = {
  encode(message: HealthCheckResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheckResult {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: HealthCheckResult): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheckResult>, I>>(base?: I): HealthCheckResult {
    return HealthCheckResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheckResult>, I>>(object: I): HealthCheckResult {
    const message = createBaseHealthCheckResult();
    message.message = object.message ?? "";
    return message;
  },
};

export interface IStorageController {
  Put(request: IFile): Promise<PutFileResponse>;
  Read(request: ReadFile): Promise<ReadFileResponse>;
  HealthCheck(request: HealthCheckResult): Promise<HealthCheckResult>;
}

export const IStorageControllerServiceName = "storage.IStorageController";
export class IStorageControllerClientImpl implements IStorageController {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || IStorageControllerServiceName;
    this.rpc = rpc;
    this.Put = this.Put.bind(this);
    this.Read = this.Read.bind(this);
    this.HealthCheck = this.HealthCheck.bind(this);
  }
  Put(request: IFile): Promise<PutFileResponse> {
    const data = IFile.encode(request).finish();
    const promise = this.rpc.request(this.service, "Put", data);
    return promise.then((data) => PutFileResponse.decode(_m0.Reader.create(data)));
  }

  Read(request: ReadFile): Promise<ReadFileResponse> {
    const data = ReadFile.encode(request).finish();
    const promise = this.rpc.request(this.service, "Read", data);
    return promise.then((data) => ReadFileResponse.decode(_m0.Reader.create(data)));
  }

  HealthCheck(request: HealthCheckResult): Promise<HealthCheckResult> {
    const data = HealthCheckResult.encode(request).finish();
    const promise = this.rpc.request(this.service, "HealthCheck", data);
    return promise.then((data) => HealthCheckResult.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
