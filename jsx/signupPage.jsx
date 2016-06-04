import React from 'react';
import request from 'browser-request';
import {Router, Route, Link, browserHistory} from 'react-router';

import SignupInput from './signupComp.jsx'

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleUsername = this.handleUsername.bind(this);
    }

    handleUsername(event) {
      // when pressing enter in the search bar
      if(event.keyCode === 13) {
        console.log(event.target.value);
        request({
          method: 'POST',
          url: 'http://localhost:3000/signup',
          json: {username: event.target.value},
        }, (err, response, body) => {
          console.log(Router)
          if (err) console.log()
          else {
              browserHistory.push({pathname: 'quiz', 
                state: {id: body,
                  username: event.target.value,
                }
              })
            }
          }
        )
      }
    }

    render() {
      return (
        <div>
          <h2>Put name here!</h2>
          <SignupInput handleUsername={this.handleUsername}/>
        </div>
      )
    }
}

module.exports = Search;
