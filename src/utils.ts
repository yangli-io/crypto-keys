import { Buffer } from 'buffer'
import bs58 from 'bs58'

export function hexToUint8(hexString: string): Uint8Array {
  return Uint8Array.from(Buffer.from(hexString, 'hex'));
}

export function uint8ToHex(uint8Arr: Uint8Array): string {
  return Buffer.from(uint8Arr).toString('hex');
}

export function uint8ToBs58(uint8Arr: Uint8Array): string {
  return bs58.encode(uint8Arr);
}

export function bs58ToUint8(bs58String: string): Uint8Array {
  return Uint8Array.from(bs58.decode(bs58String));
}