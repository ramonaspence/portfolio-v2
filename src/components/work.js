import React, {Component} from 'react';
import '../App.css';

import Nav from './nav.js';
import code3 from '../images/code3.png'

class Work extends Component {

    render() {
        return (
            <React.Fragment>
                <Nav />
                <div className="row portfolio">
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
                        <p className='subtitle'>At Carolina Code School, and since graduating, I've built single-page applications in React, MVC applications in Django and backend APIs in Python. I have learned by doing, and seek to always be learning and growing as a software developer.

                        </p>
                        <hr />
                        <div id="portfolio-details" className="portfolio-works">
                        <div className="card col-12">
                            <div className="card-header">
                            <h2>Hack Greenville's Tech Calendar Service<a data-toggle="collapse" href="#hackGreenville" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <i className="fa fa-plus-square" aria-hidden="true"></i>
                            </a></h2>
                            
                            <div className="collapse" id="hackGreenville">
                            <div className="card card-body">
                              <h5>I have worked with Hack Greenville on a project that acts as a tech event aggregator. This included a lot of work in Git, as well as with API calls and manipulating that data.<br /><br /> I have linked the Github repository as well as a list of Issues I have worked on. </h5>
                            </div>
                          </div>


                            </div>
                       
                            <div className="card-body">
                              
                              <a className="github-link" data-toggle="tooltip" data-placement="top" title="View Source Code" href="https://github.com/codeforgreenville/upstate_tech_cal_service"><i class="fab fa-github-square"></i></a>
                              <a className="gh-pages" data-toggle="tooltip" data-placement="top" title="View webpage on GH Pages" href="https://github.com/codeforgreenville/upstate_tech_cal_service/issues?q=involves%3Aramonaspence"><i class="fas fa-code-branch"></i></a>
                            </div>
                          </div>
                        <hr />
                          <div className="card col-12">
                            <div className="card-header">
                              <h2>The Chef's Notebook
                                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <i className="fa fa-plus-square" aria-hidden="true"></i>
                                </a></h2>
                              <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                  <h5>The Chef's Notebook is a full-stack, original application that I built for hobbyist cooks to record and share the recipes.
                                      The app allows you to follow other cooks, as well as comments to leave feedback.</h5>                            
                                </div>
                              </div>


                            </div>
                            <div className="card-body">
                              
                              <a className="github-link" data-toggle="tooltip" data-placement="top" title="Source Code" href="https://github.com/ramonaspence/chefs-notebook"><i class="fab fa-github-square"></i></a>
                              <a className="heroku-link" data-toggle="tooltip" data-placement="top" title="View App on Heroku" href="https://ccs-final-project-ramonaspence.herokuapp.com/"><i class="fas fa-link"></i></a>
                              <a className="vid-link" data-toggle="tooltip" data-placement="top" title="Video Demo" href="https://drive.google.com/file/d/1bBZ8qJoGNCorBWjwfYZJZ8iyuExxsfhA/view?usp=sharing" alt="link to google drive video"><i className="fa fa-video-camera" aria-hidden="true"></i></a>
                            </div>
                          </div>
                        <hr />
                          <div className="card col-12">
                            <div className="card-header">
                              <h2>Pixel Perfect<a data-toggle="collapse" href="#pixelPerfect" role="button" aria-expanded="false" aria-controls="collapseExample">
                              <i className="fa fa-plus-square" aria-hidden="true"></i>
                              </a>
                              </h2>
                            
                            <div className="collapse" id="pixelPerfect">
                              <div className="card card-body">
                                <h5>This webpage has been styled after an image. Because many clients may have a design they want and it needs to be copied, but in code.
                                This project greatly increased my understanding of layout and design, as well as how far some planning ahead can go.</h5>
                              </div>
                            </div>


                            </div>
                       
                            <div className="card-body">
                              
                              <a className="github-link" data-toggle="tooltip" data-placement="top" title="View Source Code" href="https://github.com/ramonaspence/1.4-pixel-perfect"><i class="fab fa-github-square"></i></a>
                              <a className="gh-pages" data-toggle="tooltip" data-placement="top" title="View webpage on GH Pages" href="https://ramonaspence.github.io/1.4-pixel-perfect/"><i class="fas fa-link"></i></a>
                            </div>
                          </div>
                        <hr />
                      </div>
                  </div>
              </div>
              
          </React.Fragment>
        )
    }
}
export default Work;