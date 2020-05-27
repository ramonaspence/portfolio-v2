import React, {Component} from 'react';
import '../App.css';

import outside from '../images/outside.jpg';
import Nav from './nav.js'

class Index extends Component {
    
    render() {
        return(
            <React.Fragment>
            <Nav />
            <div className="row home">
            <div  className="col-md-6 left">
                <img className="img-responsive img-rabbit" src={outside} alt="" />
            </div>
            <div id = "index_right" className="col-md-6 text-center right">
                <div className="logo">
                    <img src="src/images/logo.png" alt=""/>
                    <h4>Ramona E.J. Spence</h4>
                </div>
                <p className="home-description">
                  Hi, I'm Ramona. I'm a geek.<br /> I'm a Star Wars geek. I'm a nature geek. <br /> And I'm a code geek.<br /> This is my portfolio and a place to get to know me as a Developer.<br /> Welcome!
                </p>
               
                <div className="social">
                    <a href="https://github.com/ramonaspence"><i class="fab fa-github-square"></i></a>

                    <a href="https://www.linkedin.com/in/ramona-spence-she-her-ba606a18a/"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        </React.Fragment>
        )
    }
}
export default Index;