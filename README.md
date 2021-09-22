# Crypto Keys

Converts Keys into different formats

```js
import { Base16Key } from 'crypto-keys';

const base16Key = new Base16Key('abc012...');

console.log(base16Key.publicKeyB58());
console.log(base16Key.secretKeyB58());
```