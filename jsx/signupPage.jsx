import React from 'react';
import request from 'browser-request';
import {Router, Route, Link, hashHistory} from 'react-router';

import SearchBar from './signupInput.jsx'

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleUsername = this.handleUsername.bind(this)
    }

    handleUsername(event) {
      // when pressing enter in the search bar
      if(event.keyCode === 13) {
        request({
          method: 'POST',
          url: 'http://localhost:3000/signup',
          json: {username: event.target.value},
        }, (err, response, body) => {
          if (err) console.log('error', err)
          else {
              console.log(body)
              this.setState(body);
            }
          }
        )
      }
    }

    render() {
      return (
        <div>
          <h2>Put name here!</h2>
          <SearchBar handleUsername={this.handleUsername}/>
        </div>
      )
    }
}

module.exports = Search;