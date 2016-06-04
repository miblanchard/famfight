import React from 'react';
import ReactDOM from 'react-dom';
import SignupBox from './signupBox.jsx';

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Signup</h1>
            <SignupBox />
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('example'))