import React from 'react';
import IndiePolls from './indiePollsComp.jsx';

class PollingBox extends React.Component {

    render() {
      return (
        <div>
          <IndiePolls handleFirstPollButtonChange = {this.props.handleFirstPollButtonChange}
            handleSecondPollButtonChange = {this.props.handleSecondPollButtonChange}/>
        </div>
      )
    }
}

module.exports = PollingBox;
