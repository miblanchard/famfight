import React from 'react';

class IndiePolls extends React.Component {
    render() {
      return (
        <div>
          <form>
            Jack in the Box: <input type = "radio"
              name = "Jack in the Box"
              value = "Jack in the Box"
              onChange = {this.props.handleFirstPollButtonChange}/>
            McDonalds: <input type = "radio"
              name = "McDonalds"
              value = "McDonalds"
              onChange = {this.props.handleSecondPollButtonChange}/>
          </form>
        </div>
      )
    }
}

module.exports = IndiePolls;
