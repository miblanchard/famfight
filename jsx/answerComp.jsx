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
             />
            {this.props.secondAnswer} <input 
            type = "radio" 
            name = "secondQuestion" 
            value = {this.props.secondAnswer}
            />
          </form>
        </div>
      )
    }
}

module.exports = Answers;
