import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
