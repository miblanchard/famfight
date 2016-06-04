import React from 'react';

class SignupBox extends React.Component {
    render() {
      return (
        <div>
          <form method='POST' action='/signup'>
            <input name='username' type='text' placeholder='Enter username...'></input>
            <input name='password' type='text' placeholder='Enter password...'></input>
            <input type='submit' value='submit'></input>
          </form>
        </div>
      )
    }
}

module.exports = SignupBox;
