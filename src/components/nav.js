import React, {Component} from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <div className="row">
          <div id="navbar" className="col-12 nav-bar navbar-expand nav-bg-dark custom_btn animated slideinright">
            <Link to="/" className="btn btn-rabbit back">Home</Link>
            <div id="about" className="btn btn-rabbit">About</div>
            <div id="work" className="btn btn-rabbit">Work</div>
            <div id="contact" className="btn btn-rabbit">Contact</div>
          </div>
        </div>
        )
    }
}
export default Nav;