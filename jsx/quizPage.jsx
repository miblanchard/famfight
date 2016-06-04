import React from 'react';
import request from 'browser-request';
import PollingBox from './pollingBoxComp.jsx';
import QuizBox from './quizBoxComp.jsx'

const socket = io.connect('http://localhost:3000');

class QuizPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        finishedWithPoll: false,
        finishedMainQuestion: false,
      };
      this.handleFirstRadioButtonChange = this.handleFirstRadioButtonChange.bind(this);
      this.handleSecondRadioButtonChange = this.handleSecondRadioButtonChange.bind(this)
    }

    handleFirstRadioButtonChange(event) {
      // in the signupPage we make a post request and receive a mongoID in the response
      // the response is carried over into this react route 'quiz' through browserHistory.push
      // our mongoID is in props.location.state
      const ourID = this.props.location.state.id;

      // gets the value of the radio box we click
      const ourChoice = event.currentTarget.value;
      const objectToSend = {id: ourID, choices: [ourChoice]}

      console.log(objectToSend);

      socket.emit('poll', objectToSend);

      this.setState({
        finishedWithPoll: true,
      })
    }

    handleSecondRadioButtonChange(event) {
      const ourID = this.props.location.state.id;
      const ourChoice = event.currentTarget.value;
      const objectToSend = {id: ourID, choices: [ourChoice]}
      console.log(this.props.location.state.username);
      console.log(objectToSend)

      socket.emit('poll', objectToSend);

      this.setState({
        finishedWithPoll: true,
      })
    }

    // answerQuestionButtonOne(event){
    //   const ourID = this.props.location.state.id;
    //   const ourChoice = event.currentTarget.value;
    //   this.setState({
    //     id: ourID,
    //     choice: [ourChoice],
    //     finishedMainQuestion: true,
    //   })
    // }
    //
    // answerQuestionButtonTwo(event){
    //   const ourID = this.props.location.state.id;
    //   const ourChoice = event.currentTarget.value;
    //   this.setState({
    //     id: ourID,
    //     choice: [ourChoice],
    //     finishedMainQuestion: true,
    //   })
    // }
    render() {

      // case 1: if we haven't chosen anything in a poll yet
      if (!this.state.finishedWithPoll) {
        return (
          <div>
            <h2>Quiz Page!</h2>
            <PollingBox handleFirstRadioButtonChange = {this.handleFirstRadioButtonChange}
              handleSecondRadioButtonChange = {this.handleSecondRadioButtonChange}
            />
          </div>
        )
      }

      // case 2: we've selected a choice in the poll, so render the quiz challenge
      else {
        return(
          <QuizBox />
        )
      }
   }
}

module.exports = QuizPage;
