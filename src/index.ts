import { Keypair } from '@solana/web3.js'
import { hexToUint8, uint8ToHex, uint8ToBs58, bs58ToUint8 } from './utils'

class CryptoKeys {
  private keypair: Keypair;

  constructor(private secretkey: Uint8Array) {
    this.keypair = Keypair.fromSecretKey(secretkey);
  }

  publicKeyHex(): string {
    return uint8ToHex(this.keypair.publicKey.toBytes());
  }

  secretKeyHex(): string {
    return uint8ToHex(this.secretkey);
  }

  publicKeyBytes(): Uint8Array {
    return this.keypair.publicKey.toBytes();
  }

  secretKeyBytes(): Uint8Array {
    return this.keypair.secretKey;
  }

  publicKeyB58(): string {
    return this.keypair.publicKey.toBase58();
  }

  secretKeyB58(): string {
    return uint8ToBs58(this.keypair.secretKey);
  }
}

export class Base16Key extends CryptoKeys {
  constructor(base16Keys: string) {
    super(hexToUint8(base16Keys));
  }
}

export class Base58Key extends CryptoKeys {
  constructor(base58Keys: string) {
    super(bs58ToUint8(base58Keys));
  }
}

export class Uint8Key extends CryptoKeys {
  constructor(uint8Keys: Uint8Array) {
    super(uint8Keys);
  }
}
