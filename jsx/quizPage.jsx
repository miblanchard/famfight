import React from 'react';
import request from 'browser-request';

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
        </div>
      )
    }
}

module.exports = QuizPage;