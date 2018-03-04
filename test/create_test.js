const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', done => {
    const nitin = new User({ name: 'Nitin' });

    nitin.save().then(() => {
      assert(!nitin.isNew);
      done();
    });
  });
});
