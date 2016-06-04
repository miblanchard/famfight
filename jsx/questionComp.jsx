import React from 'react';


class Questions extends React.Component {

  render() {
      return (
        <div>
          <h1>{this.props.question}</h1>
        </div>
      )
    }
}

module.exports = Questions;
