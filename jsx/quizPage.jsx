import React from 'react';
import request from 'browser-request';
import PollingBox from './pollingBoxComp.jsx';
import QuizBox from './quizBox.jsx'

class QuizPage extends React.Component {
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
          <QuizBox />
        </div>
      )
    }
}

module.exports = QuizPage;
