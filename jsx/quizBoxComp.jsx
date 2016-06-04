import React from 'react';
import AnswerComp from './answerComp.jsx';
import QuestionComp from './questionComp.jsx'

class QuizBox extends React.Component {

    render() {
      return (
        <div className = "quizBoxDesign">
          <QuestionComp question = {this.props.question}/>
          <AnswerComp firstAnswer = {this.props.firstAnswer}
            secondAnswer = {this.props.secondAnswer}
            handleFirstQuestionButtonChange = {this.props.handleFirstQuestionButtonChange}
            handleSecondQuestionButtonChange = {this.props.handleSecondQuestionButtonChange}
            />
        </div>
      )
    }
}

module.exports = QuizBox;
