import React from 'react';

class LoginBox extends React.Component {
  render(){
    return (
      <div>
        <form>
          <input name="Username" type="text" placeholder="Username"></input>
          <input name="Password" type="text" placeholder="Password"></input>
          <input  type="submit" value = "submit"></input>
        </form>
      </div>
    )
  }
}

module.exports = LoginBox;
