import React from 'react';


class Answers extends React.Component {
  
    render() {
      return (
        <div>
          <form>
            {this.props.firstAnswer} <input
             type = "radio" 
             name = "firstQuestion" 
             value = {this.props.firstAnswer} 
             onChange = {this.props.handleFirstQuestionButtonChange}
             />
            {this.props.secondAnswer} <input 
            type = "radio" 
            name = "secondQuestion" 
            value = {this.props.secondAnswer}
            onChange = {this.props.handleSecondQuestionButtonChange}
            />
          </form>
        </div>
      )
    }
}

module.exports = Answers;
