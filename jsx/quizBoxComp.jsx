import React from 'react';
import AnswerComp from './answerComp.jsx';
import QuestionComp from './questionComp.jsx'

class QuizBox extends React.Component {

    render() {
      return (
        <div className = "quizBoxDesign">
          <QuestionComp />
          <AnswerComp />
        </div>
      )
    }
}

module.exports = QuizBox;
