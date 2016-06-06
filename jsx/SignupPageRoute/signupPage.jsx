import React from 'react';
import request from 'browser-request';
import {Router, Route, Link, browserHistory} from 'react-router';

import SignupInput from './signupComp.jsx'

class SignupPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleUsername = this.handleUsername.bind(this);
    }

    handleUsername(event) {
      // when pressing enter in the input box of <SignupInput />
      if(event.keyCode === 13) {

        // send a post request to the server 
        // event.target.value is whatever was typed into the input box
        request({
          method: 'POST',
          url: 'http://localhost:3000/signup',
          json: {username: event.target.value},
        }, (err, response, body) => {
          if (err) console.log('error', err)
          else {

            // if successful, redirect to quiz page
            // in the body is a mongoID sent back from the server
            // we make that ID available in the quiz page we route to
            browserHistory.push({pathname: 'quiz', 
              state: {id: body,}
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

module.exports = SignupPage;
