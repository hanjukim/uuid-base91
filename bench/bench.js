const { Suite } = require('benchmark');
const uuid = require('uuid');
const base91 = require('..');
const d64 = require('uuid-d64');
const base64 = require('uuid-base64');
const slugid = require('slugid');

const uuids = [];
const d64s = [];
const slugids = [];
const base91s = [];

for (let i = 0; i < 100; i += 1) {
  uuids.push(uuid());
  d64s.push(d64.encode(uuids[uuids.length - 1]));
  slugids.push(slugid.encode(uuids[uuids.length - 1]));
  base91s.push(base91.encode(uuids[uuids.length - 1]));
}

let index = 0;

new Suite('encoder', { minTime: 3000 })
  .add('check', function() {
    if (d64.encode(uuids[index % 100]) !== base64.encode(uuids[index % 100])) throw new Error('panic');
    index += 1;
  })
  .add('uuid-base91', function() {
    base91.encode(uuids[index % 100]);
    index += 1;
  })
  .add('uuid-d64', function() {
    d64.encode(uuids[index % 100]);
    index += 1;
  })
  .add('uuid-base64', function() {
    base64.encode(uuids[index % 100]);
    index += 1;
  })
  .add('slugid', function() {
    slugid.encode(uuids[index % 100]);
    index += 1;
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
    index = 0;
  })
  .on('complete', function() {
    console.log('Fastest encoder is ' + this.filter('fastest').map('name'));
  })
  .run();

index = 0;

new Suite('decoder', { minTime: 3000 })
  .add('check', function() {
    if (d64.decode(d64s[index % 100]) !== base64.decode(d64s[index % 100])) throw new Error('panic');
    index += 1;
  })
  .add('uuid-base91', function() {
    base91.decode(base91s[index % 100]);
    index += 1;
  })
  .add('uuid-d64', function() {
    base64.decode(d64s[index % 100]);
    index += 1;
  })
  .add('uuid-base64', function() {
    d64.decode(d64s[index % 100]);
    index += 1;
  })
  .add('slugid', function() {
    slugid.decode(slugids[index % 100]);
    index += 1;
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
    index = 0;
  })
  .on('complete', function() {
    console.log('Fastest decoder is ' + this.filter('fastest').map('name'));
  })
  .run();
