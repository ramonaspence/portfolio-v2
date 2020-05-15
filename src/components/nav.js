import React, {Component} from 'react';
import '../App.css';


import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <div className="row no-gutters">
          <div id="navbar" className="col-12 custom_btn animated slideinright">
            <Link to="/" className="btn btn-rabbit back">Home</Link>
            <Link to="/about/" className="btn btn-rabbit back">About</Link>
            <Link to="/work/" className="btn btn-rabbit back">Work</Link>
            <Link to="/contact/" className="btn btn-rabbit back">Contact</Link>
          </div>
        </div>
        )
    }
}
export default Nav;