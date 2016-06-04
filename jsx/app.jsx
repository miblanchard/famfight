import React from 'react';
import ReactDOM from 'react-dom';
import SignupBox from './signupBox.jsx';
import {Router, Route, Link, hashHistory} from 'react-router';

import SignupPage from './signupPage.jsx';

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>FamFight</h1>
            <Router history={hashHistory}>
              <Route path='/' component={SignupPage}/>
              <Route path='/signup' component={SignupBox}/>
            </Router>
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('example'))