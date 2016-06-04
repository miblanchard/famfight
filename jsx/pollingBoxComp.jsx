import React from 'react';
import IndiePolls from './indiePollsComp.jsx';

class PollingBox extends React.Component {

    render() {
      return (
        <div>
          <h1>Hello Polling Box</h1>
          <IndiePolls />
        </div>
      )
    }
}

module.exports = PollingBox;
