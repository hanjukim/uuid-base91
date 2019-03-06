import * as base91 from 'node-base91';

const _bytesToHex: string[] = [];

for (let i = 0; i < 256; i++) {
  _bytesToHex[i] = (i + 0x100).toString(16).substr(1);
}

export const encode = (uuid: string) => {
  return base91.encode(uuid.split('-').join(''), 'hex');
}

export const decode = (base91str: string) => {
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
}
