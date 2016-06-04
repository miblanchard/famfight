import React from 'react';

class SignupInput extends React.Component {
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

module.exports = SignupInput;


