import React from 'react';
import request from 'browser-request';
import PollingBox from './pollingComp.jsx';
import SearchBar from './signupInput.jsx'

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      console.log(this.props.location.state);
      return (
        <div>
          <h2>Quiz Page!</h2>
          <PollingBox />
        </div>
      )
    }
}

module.exports = Search;
