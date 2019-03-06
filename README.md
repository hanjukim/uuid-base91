uuid-d64
=====
> Compression codec for uuid to base91 in less than 20 bytes

## Install
```
$ npm install uuid-base91
```

## Usage
```javascript
const { encode, decode } = require('uuid-base91');

const id = uuid();
const encoded = encode(id);
const decoded = decode(encoded);

console.log(id);
console.log(encoded);
console.log(decoded);
```

## API

### encode(str)
Encodes uuid to base91

### decode(str)
Decodes base91 to uuid

#### str
Type: `String`

## Benchmark
```
$ node bench.js
check x 244,078 ops/sec ±2.47% (89 runs sampled)
uuid-base91 x 865,275 ops/sec ±2.15% (84 runs sampled)
uuid-d64 x 807,423 ops/sec ±2.39% (85 runs sampled)
uuid-base64 x 391,699 ops/sec ±1.54% (91 runs sampled)
slugid x 296,723 ops/sec ±25.10% (81 runs sampled)
Fastest encoder is uuid-base91
check x 492,547 ops/sec ±1.80% (84 runs sampled)
uuid-base91 x 1,579,881 ops/sec ±0.56% (97 runs sampled)
uuid-d64 x 1,387,701 ops/sec ±1.56% (82 runs sampled)
uuid-base64 x 1,374,355 ops/sec ±2.11% (82 runs sampled)
slugid x 1,354,697 ops/sec ±0.44% (96 runs sampled)
Fastest decoder is uuid-base91
```

## License
Source files are distributed under the Apache Version 2.0 license found in the LICENSE file.
