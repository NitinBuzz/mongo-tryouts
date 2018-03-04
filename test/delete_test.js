const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let nitin;

  beforeEach(done => {
    nitin = new User({ name: 'Nitin' });
    nitin.save().then(() => done());
  });
  it('model instance remove', done => {
    nitin
      .remove()
      .then(() => User.findOne({ name: 'Nitin' }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', done => {
    User.remove({ name: 'Nitin' })
      .then(() => User.findOne({ name: 'Nitin' }))
      .then(user => {
        assert(user === null);
        done();
      });
  });
  it('class method findAndRemove', done => {
    User.findOneAndRemove({ name: 'Nitin' })
      .then(() => User.findOne({ name: 'Nitin' }))
      .then(user => {
        assert(user === null);
        done();
      });
  });
  it('class method findByIdAndRemove', done => {
    User.findByIdAndRemove({ _id: nitin._id })
      .then(() => User.findOne({ name: 'Nitin' }))
      .then(user => {
        assert(user === null);
        done();
      });
  });
});
