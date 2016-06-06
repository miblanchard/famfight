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
      // in the signupPage we make a post request and receive a mongoID
      // the response is carried over into this react route 'quiz' through browserHistory.push
      // our mongoID is in props.location.state
      const ourID = this.props.location.state.id;
      const ourRadioButtonChoice = event.currentTarget.value;
      const objectToSend = {id: ourID, choices: [ourRadioButtonChoice]}

      // send a 'poll' event to the socket listenening on the server with relevant info
      socket.emit('poll', objectToSend);

      // rerender the page without the poll
      this.setState({
        finishedWithPoll: true,
      })
    }

    handleSecondRadioButtonChange(event) {
      const ourID = this.props.location.state.id;
      const ourRadioButtonChoice = event.currentTarget.value;
      const objectToSend = {id: ourID, choices: [ourRadioButtonChoice]}

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

    // when we call setState and before the render
    componentWillUpdate() {

      // listen for the socket event 'waiting on...' sent from the server
      socket.on('waiting on additional polls from different sockets', () => {

        // render a waiting screen if other competitors haven't selected a poll option
        // NOTE** we had trouble getting this page to render
        if(this.state.finishedWithPoll) {
          this.setState({waitingForOtherPlayers: true});
        }
      })

      //
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
      // NOTE** we had trouble having this page render
      else if (this.state.waitingForOtherPlayers) {
        return (
          <div>
            <h1>We're waiting bro!</h1>
          </div>
        )
      }

      // case 3: all sockets have selected a choice in the poll, so render the quiz challenge 
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
