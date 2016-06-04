import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import QuizPage from './quizPage.jsx'
import SignupPage from './signupPage.jsx';

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>FamFight</h1>
            <Router history={browserHistory}>
              <Route path='/' component={SignupPage}/>
              <Route path='/quiz' component={QuizPage}/>
            </Router>
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('example'))