const assert = require('assert');

const User = require('../src/user');

describe('Reading users out of database', () => {
  let nitin;
  beforeEach(done => {
    nitin = new User({ name: 'Nitin' });
    nitin.save().then(() => {
      done();
    });
  });

  it('finds all users with name of Nitin', done => {
    User.find({ name: 'Nitin' }).then(users => {
      assert(users[0]._id.toString() === nitin._id.toString());
      done();
    });
  });

  it('find user with particular id', done => {
    User.findOne({ _id: nitin._id }).then(user => {
      assert(user.name === 'Nitin');
      done();
    });
  });
});
