import React from 'react';
import indiePolls from './individualPolls.jsx';

class PollingBox extends React.Component {

    render() {
      return (
        <div>
          <indiePolls />
        </div>
      )
    }
}

module.exports = PollingBox;
