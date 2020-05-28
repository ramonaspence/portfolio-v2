import React, {Component} from 'react';
import '../App.css';

import Nav from './nav.js';
import deskwork from '../images/deskwork.jpg';

class About extends Component {

    render() {
        return(
            <React.Fragment>
            <Nav />
            <div className="row">
                    <div className="col-md-6 left" id="about_left">
                        <img className="img-responsive img-rabbit" src={deskwork} alt="" />
                    </div>

                    <div className="col-md-6 right" id="about_right">
                        <div id="watermark">
                            <h2 className="page-title" text-center>About</h2>
                            <div className="marker">a</div>
                        </div>
                        <p className='subtitle'>As a graduate from Carolina Code School in Greenville, SC, I feel confident and eager to jumpstart my software development career.
                        </p>
                        <p className="info">For the past 10 years I have been a baker and pastry chef. While I love to bake, I decided that it was not a career for me. I want something more engaging and challenging.<br /><br /> Since I've had an interest in all things techy from a young age, software development seemed like a good start, and I've found that I have a passion for the work.  <br/><br />Other passions of mine include video games, music, and biking.  
                        I spend my spare time pursuing these, but I'm always looking for ways to solve problems with software in these areas.
                          </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About; 