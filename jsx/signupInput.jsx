import React from 'react';

class LoginBox extends React.Component {
    render() {
      return (
        <div>
            <input name="username" 
              type="text" 
              placeholder="Mirror mirror on the wall..." 
              defaultValue="" 
              id="searchBar"
              onKeyDown={this.props.handleUsername}>
            </input>
        </div>
      )
    }
}

module.exports = LoginBox;


