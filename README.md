# Crypto Keys

Converts Keys into different formats

## Hex Key

```js
import { HexKey } from 'crypto-keys';

const hexKey = new HexKey('abc012...');

console.log(hexKey.publicKeyB58());
console.log(hexKey.secretKeyB58());
```

## Base 58 Key

```js
import { Base58Key } from 'crypto-keys';

const base58Key = new Base58Key('abcxyz012...');

console.log(base58Key.publicKeyHex());
console.log(base58Key.secretKeyHex());
```

## Uint8Array Key / Byte Keys

```js
import { Uint8Key } from 'crypto-keys';

const uint8Key = new Uint8Key([1,2,3 ...]);

console.log(uint8Key.publicKeyHex());
console.log(uint8Key.secretKeyHex());
```