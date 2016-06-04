'use strict'

const expect = require('chai').expect,
      io = require('socket.io-client'),
      url = 'http://localhost:3000',
      options = {
        transports: ['websocket'],
        'force new connection': true
      },
      user1 = {
        'name': 'Johnny Boy'
      }

describe('socket connection', () => {
  it('should broadcast new username once connected', (done) => {
    const client = io.connect(url, options);

    client.on('connect', (data) => {
      client.emit('connection name', user1);
    });

    client.on('new user', (username) => {
      expect(username).to.be.a('string');
      expect(username).to.equal('Johnny Boy has joined.');
      client.disconnect();
      done();
    });
  });

  it('should check for socket connection from several clients'), (done) => {
    let client1, client2, client3;
    const message = 'SUP';
    let messages = 0;

    function checkMessage(client) {
      client.on('message', (msg) => {
        expect(message).to.equal(msg);
        client.disconnect();
        messages++;
        if (messages === 3) {
          done();
        }
      })
    }

    client1 = io.connect(url, options);
    checkMessage(client1);

    client1.on('connect', (data) => {
      client2 = io.connect(url, options);
      checkMessage(client2);

      client2.on('connect', (data) => {
        client3 = io.connect(url, options);
        checkMessage(client3);

        client3.on('connect', (data) => {
          client2.send(message);
        })
      })
    })
  }
});


