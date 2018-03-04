const assert = require('assert');

const User = require('../src/user');

describe('Updating records', () => {
  let nitin;

  beforeEach(done => {
    nitin = new User({ name: 'Nitin' });
    nitin.save().then(() => done());
  });

  function assertName(operation, done) {
    operation.then(() => User.find({})).then(users => {
      assert(users.length === 1);
      assert(users[0].name === 'NaPu');
      done();
    });
  }

  it('instance type set n save', done => {
    nitin.set('name', 'NaPu');
    assertName(nitin.save(), done);
  });

  it('model instance can update', done => {
    assertName(nitin.update({ name: 'NaPu' }), done);
  });

  it('class can update', done => {
    assertName(User.update({ name: 'Nitin' }, { name: 'NaPu' }), done);
  });
  it('class can update 1 record', done => {
    assertName(
      User.findOneAndUpdate({ name: 'Nitin' }, { name: 'NaPu' }),
      done
    );
  });
  it('class can find by Id and update', done => {
    assertName(User.findByIdAndUpdate(nitin._id, { name: 'NaPu' }), done);
  });
});
