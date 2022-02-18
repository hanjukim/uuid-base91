"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const base91 = require("node-base91");
const _bytesToHex = [];
for (let i = 0; i < 256; i++) {
    _bytesToHex[i] = (i + 0x100).toString(16).substr(1);
}
const encode = (uuid) => {
    return base91.encode(uuid.split('-').join(''), 'hex');
};
exports.encode = encode;
const decode = (base91str) => {
    let i = 0;
    const bth = _bytesToHex;
    const buf = base91.decode(base91str);
    return bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]];
};
exports.decode = decode;
//# sourceMappingURL=index.js.map