const expect = require('chai').expect,
      mongoose = require('mongoose'),
      request = require('supertest-as-promised')('http://localhost:3000'),
      User = require('../server/models/user-model'),
      Poll = require('../server/models/poll-model');

mongoose.connect('mongodb://mlaythe:lynch245@ds019698.mlab.com:19698/users');

describe('Mongodb', () => {
  beforeEach( (done) => {
    User.remove({}, (err, docs) => {
      if (err) throw new Error(err);
      Poll.remove({}, (err, docs) => {
        if (err) throw new Error(err);
        done();
      })
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

  xit('should add user and add choice to user array', (done) => {
    User.create({'username': 'Johnny'}, (err, docs) => {
      if (err) throw new Error(err);

      User.create({'username': 'Tim'}, (err, doc) => {

        const data1 = {
          'username': docs.username,
          'choices': ['Jack in the Box']
        };

        const data2 = {
          'username': doc.username,
          'choices': ['Burger King']
        };

        return request
          .post('/poll')
          .send(data1)
          .then( (res) => {
            return request
              .post('/poll')
              .send(data2)
              .expect('conflict', done)
          });
      });
    });
  });

  xit('should add user\'s choice to array and compare answers between users', (done) => {
    User.create({'username': 'Johnny'}, (err, docs) => {
      if (err) throw new Error(err);

      User.create({'username': 'Ponyboy'}, (err, doc) => {
        if (err) throw new Error(err);

        console.log('id1', docs);
        console.log('id2', doc);

        const data1 = {
          'choices': ['Taco Bell']
        };
        const data2 = {
          'choices': ['Sonic']
        }

        request
          .post('/poll')
          .send(data1)
          .expect('waiting on additional polls from different sockets', (req, res) => {
            request
              .post('/poll')
              .send(data2)
              .expect('conflict', done)
          });
      });
    });
  });

  after( (done) => {
    mongoose.disconnect();
    done();
  });
});
