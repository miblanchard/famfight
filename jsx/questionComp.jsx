import React from 'react';


class Questions extends React.Component {
constructor(props) {
     super(props);
     this.state = {
       Question:"What is my name"
     }
   },
  render() {
      return (
        <div>
          <h1>{this.state.Question}</h1>
        </div>
      )
    }
}

module.exports = Questions;
