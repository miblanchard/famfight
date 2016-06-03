import React from 'react';
import ReactDOM from 'react-dom';
import World from './world.jsx';

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Hello</h1>
            <World />
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('example'))