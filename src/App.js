import React, {Component} from 'react';
import './App.css';



import {BrowserRouter as Router,
Route,
Link,
Switch
} from 'react-router-dom'; 


import Index from './components/index.js'
import About from './components/about.js'
import Work from './components/work.js'
import Contact from './components/contact.js'



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

          <Route path="/contact/">
            <Contact />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
