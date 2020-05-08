import React, {Component} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
Route,
Link,
Switch
} from 'react-router-dom'; 

import Nav from './components/nav.js'
import Index from './components/index.js'

class App extends Component {
  
  render() {
    return(
        
      <Router>
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
