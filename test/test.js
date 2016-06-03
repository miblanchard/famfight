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
      expect(username).to.equal('Johnny Boy has joined');
      client.disconnect();
      done();
    });
  });
});
