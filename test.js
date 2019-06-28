const test = require('ava');
const uuid = require('uuid');
const { encode, decode } = require('.');

test('decoded data integrity', t => {
  const id = uuid();
  const encoded = encode(id);
  const decoded = decode(encoded);

  t.is(id, decoded);
});
