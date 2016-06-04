import React from 'react';

class IndiePolls extends React.Component {
    render() {
      return (
        <div>
          <form>
            Jack in Box:<input type = "radio" name = "Jack in Box" value = "Jack in Box"/>
          McDonalds: <input type = "radio" name = "McDonalds" value = "McDonalds"/>
            <input type = "submit" value = "Choose your polling"/>
          </form>
        </div>
      )
    }
}

module.exports = IndiePolls;
