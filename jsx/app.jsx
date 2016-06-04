import React from 'react';
import ReactDOM from 'react-dom';
// import SignupBox from './signupBox.jsx';
import LoginBox from './loginBox.jsx';
impore request from ('browser-request');

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Signup Now</h1>
            <LoginBox />
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('example'))
