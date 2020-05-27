import React, {Component} from 'react';
import '../App.css';

import Nav from './nav.js';
import contact from '../images/contact.jpg'

class Contact extends Component {

    render() {
        return(
        <React.Fragment>
            <Nav />
            <div class="container main">
                <div class="row">
                    <div class="col-md-6 left" id="contact_left">
                        <img class="img-responsive img-rabbit" alt="" src={contact} />
                    </div>

                    <div class="col-md-6 right" id="contact_right">
                        <div id="watermark">
                            <h2 class="page-title" text-center>Contact</h2>
                            <div class="marker">
                                c
                            </div>
                        </div>
                        <p class='subtitle'>I'm seeking opportunities and would love to have an informal conversation or informational interview with you!<br /><br />
                        Let's get in contact with each other!
                        </p>
                        
                       
                        <div class="contact-links">
                        <a href="mailto:ramonaejspence@gmail.com" ><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/ramona-spence-she-her-ba606a18a/"><i class="fab fa-linkedin"></i></a>
                            

                        </div>
                        </div>
                    </div>
                </div>
           
            
        </React.Fragment>
        )
    }
}
export default Contact;