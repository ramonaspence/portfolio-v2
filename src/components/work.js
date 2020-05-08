import React, {Component} from 'react';
import '../App.css';

import Nav from './nav.js';
import code3 from '../images/code3.png'

class Work extends Component {

    render() {
        return (
            <React.Fragment>
                <Nav />
                <div className="row">
                    <div className="col-md-6" id="work_left">
                        <div id="owl-demo" className="owl-carousel owl-theme">
                            <div className="item"><img className="img-responsive img-rabbit" src={code3} alt="" /></div>
                            
                        </div>
                    </div>

                    <div className="col-md-6" id="work_right">
                        <div id="watermark">
                            <h2 className="page-title" text-center>Work</h2>
                            <div className="marker">w</div>
                        </div>
                        <p className='subtitle'>At Carolina Code School, I've learned to work in React, Django, Django Rest Framework and of course, languages such as CSS, JavaScript and Python. <br /> I've really come to love back-end development and I hope to pursue Python much further.
                        </p>
                        <div className="portfolio-works">
                          <div className="card col-12">
                            <div className="card-header">
                            <h2>The Chef's Notebook</h2>
                            <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            About the App  <i className="fa fa-plus-square" aria-hidden="true"></i>
                            </a>
                            <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                              <h5>The Chef's Notebook is a full-stack, original application that I built for hobbyist cooks to record and share the recipes.
                                  The app allows you to follow other cooks, as well as comments to leave feedback.</h5>                            </div>
                          </div>


                            </div>
                            <div className="card-body">
                              <h5>Check out the source code on Github, the live app on Heroku, or a video demo of the app below.</h5>
                              <a className="github-link" data-toggle="tooltip" data-placement="top" title="Source Code" href="https://github.com/ramonaspence/chefs-notebook"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                              <a className="heroku-link" data-toggle="tooltip" data-placement="top" title="View App on Heroku" href="https://ccs-final-project-ramonaspence.herokuapp.com/"><i className="fa fa-paper-plane" aria-hidden="true"></i></a>
                              <a className="vid-link" data-toggle="tooltip" data-placement="top" title="Video Demo" href="https://drive.google.com/file/d/1bBZ8qJoGNCorBWjwfYZJZ8iyuExxsfhA/view?usp=sharing"><i className="fa fa-video-camera" aria-hidden="true"></i></a>
                            </div>
                          </div>

                          <div className="card col-12">
                            <div className="card-header">
                            <h2>Pixel Perfect</h2>
                            <a data-toggle="collapse" href="#pixelPerfect" role="button" aria-expanded="false" aria-controls="collapseExample">
                            About the App  <i className="fa fa-plus-square" aria-hidden="true"></i>
                            </a>
                            <div className="collapse" id="pixelPerfect">
                            <div className="card card-body">
                              <h5>This webpage has been styled after an image. Because many clients may have a design they want and it needs to be copied, but in code.
                              This project greatly increased my understanding of layout and design, as well as how far some planning ahead can go.</h5>
                            </div>
                          </div>


                            </div>
                            <div className="card-body">
                              <h5>Check out the source code on Github and the webpage itself on GH Pages</h5>
                              <a className="github-link" data-toggle="tooltip" data-placement="top" title="View Source Code" href="https://github.com/ramonaspence/1.4-pixel-perfect"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                              <a className="gh-pages" data-toggle="tooltip" data-placement="top" title="View webpage on GH Pages" href="https://ramonaspence.github.io/1.4-pixel-perfect/"><i className="fa fa-paper-plane" aria-hidden="true"></i></a>
                            </div>
                          </div>

                          <div className="card col-12">
                            <div className="card-header">
                            <h2>Tool Library</h2>
                            <a data-toggle="collapse" href="#toolLibrary" role="button" aria-expanded="false" aria-controls="collapseExample">
                            About the App  <i className="fa fa-plus-square" aria-hidden="true"></i>
                            </a>
                            <div className="collapse" id="toolLibrary">
                            <div className="card card-body">
                              <h5>Tool Library is a Django app where neighbors are able to list tools they're willing to loan, while others may choose to borrow or "checkout" those tools.
                              Whether a tool is checked out or not can be seen by other users. This app provides a simple but effective way for neighbors to loan tools and still keep up with them.</h5>
                            </div>
                          </div>


                            </div>
                            <div className="card-body">
                              <h5>Check out the source code on Github and the webpage itself on GH Pages</h5>
                              <a className="github-link" data-toggle="tooltip" data-placement="top" title="View Source Code" href="https://github.com/ramonaspence/7.4-hey-neighbor"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                              <a className="heroku-link" data-toggle="tooltip" data-placement="top" title="View App on Heroku" href="https://hey-neighbor-ramonaspence.herokuapp.com/"><i className="fa fa-paper-plane" aria-hidden="true"></i></a>
                            </div>
                          </div>



                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
export default Work;