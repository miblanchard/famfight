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
        waitingForOtherPlayers: false,
        readyForQuiz: false,
      };
      this.handleFirstRadioButtonChange = this.handleFirstRadioButtonChange.bind(this);
      this.handleSecondRadioButtonChange = this.handleSecondRadioButtonChange.bind(this);
      // this.handleFirstQuestionButtonChange = this.handleFirstQuestionButtonChange(this);
      // this.handleSecondQuestionButtonChange = this.handleSecondQuestionButtonChange(this);
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

    // handleFirstQuestionButtonChange(event) {
    //   const ourID = this.props.location.state.id;
    //   this.setState({
    //     finishedMainQuestion: true,
    //   })
    // }
    
    // handleSecondQuestionButtonChange(event) {
    //   const ourID = this.props.location.state.id;
    //   this.setState({
    //     finishedMainQuestion: true,
    //   })
    // }

    componentWillUpdate() {
      socket.on('waiting on additional polls from different sockets', () => {
        if(this.state.finishedWithPoll) {
          this.setState({waitingForOtherPlayers: true});
        }
      })
      socket.on('conflict', (data) => {
        this.setState({readyForQuiz: true});
      });
    }

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

      // case 2: we're waiting for all players to select a choice in the poll
      // had problems implementing this page
      else if (this.state.waitingForOtherPlayers) {
        return (
          <div>
            <h1>We waiting bro!</h1>
          </div>
        )
      }

      // case 3: we've selected a choice in the poll, so render the quiz challenge
      else if (this.state.readyForQuiz){
        return(
          <QuizBox firstAnswer = "Heisenberg" 
            secondAnswer = "White" 
            question="Say my name."
            handleFirstQuestionButtonChange = {this.handleFirstQuestionButtonChange}
            handleSecondQuestionButtonChange = {this.handleSecondQuestionButtonChange}
          />
        )
      }
   }
}

module.exports = QuizPage;
