import React, {Component} from 'react';
import './App.css';



import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
Route,
Link,
Switch
} from 'react-router-dom'; 

import Index from './components/index.js'
import About from './components/about.js'
import Work from './components/work.js'

class App extends Component {
  
  render() {
    return(
        
      <Router>
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>

          <Route path="/about/">
            <About />
          </Route>

          <Route path="/work/">
            <Work />
          </Route>

        </Switch>
      </Router>
    )
  }
}

export default App;
