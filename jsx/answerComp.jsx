import React from 'react';


class Answers extends React.Component {

jeyip [12:20 PM] Star this message
constructor(props) {
     super(props);
     this.state = {
       id: '',
       choice: '',
       finishedWithPoll: false,
     };
     this.handleFirstRadioButtonChange = this.handleFirstRadioButtonChange.bind(this);
     this.handleSecondRadioButtonChange = this.handleSecondRadioButtonChange.bind(this)
   },
    render() {
      return (
        <div>
          <input type= "radio" name= "Austin" value= "Austin"/>Austin
          <input type= "radio" name= "Jeremy" value= "Jeremy"/>Jeremy
        </div>
      )
    }
}

module.exports = Answers;
