const expect = require('chai').expect,
      mongoose = require('mongoose'),
      User = require('../server/models/user-model');

mongoose.connect('mongodb://mlaythe:lynch245@ds019698.mlab.com:19698/users');

describe('Mongodb', () => {
  before( (done) => {
    User.remove({}, (err, docs) => {
      if (err) throw new Error(err);
      done();
    });
  });

  it('should add user to database', (done) => {
    User.create({'username': 'Michael'}, (err, docs) => {
      if (err) throw new Error(err);
      User.find(docs, (err, doc) => {
        expect(docs.username).to.equal('Michael');
        done();
      });
    });
  });

  after( (done) => {
    mongoose.disconnect();
    done();
  });
});
