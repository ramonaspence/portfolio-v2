import React, {Component} from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
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
                        <p className="info">Currently, I do volunteer work with HackGreenville on an event calendar service written in Python. The dev world has captured me by how willing everyone is to give back and to contribute to others' projects. Now, I wish to give back as well and I'm only beginning. <br/>I began a career as a baker in 2012, and pursued that career until becoming a pastry chef. However, I started learning HTML when I was 12. Of course, I haven't been dedicated to web development since then, but my interest in all things Hacky and Techy hasn't left me since Super Mario64 in 1996.
                        But much more recently I decided to make a career change because I quickly saw the ceilings in Food Service. I had to find a new path that would challenge me and give me room to grow--non-stop. I'm very happy to say that I have found that in Software Development. So after a lot of contemplation about what I wanted in life, I decided to go to a coding bootcamp; Carolina Code School.
                        I have not been disappointed. I love to learn and that's a huge part of software development, because we can't know everything all of the time. <br /> I hope you find that this portfolio speaks for itself to show my skills. Perhaps your company and myself will be a good fit for each other.
                          </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About; 