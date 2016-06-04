import React from 'react';
import IndiePolls from './indiePollsComp.jsx';

class PollingBox extends React.Component {

    render() {
      return (
        <div>
          <IndiePolls handleFirstRadioButtonChange = {this.props.handleFirstRadioButtonChange}
            handleSecondRadioButtonChange = {this.props.handleSecondRadioButtonChange}/>
        </div>
      )
    }
}

module.exports = PollingBox;
