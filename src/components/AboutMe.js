import React, { Component } from 'react'
import MyPic from './mypic.png';
import Pic from './pic.png'

import ProfilePic from './profilepic.png';
import ResponsiveIcon from './responsive.png'
import AppIcon from './app.png'
import DiscoverIcon from './discover.png'
import FastIcon from './fast.png'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
 



export default class aboutme extends Component {
  render() {
    return (
        <div>

            <div className="container text-center"  id="services">
                <div className="row">
                    <section className="col-sm-6 col-md-3">
                    <img className="img-fluid rounded-circle figure-img mx-auto" width="304" height="236" src={ResponsiveIcon} width={150} alt="Image"/>
                    <figcaption className="figure-caption">
                    <h4>Responsive</h4>
                    <p>UI adopting to the device screen size.</p>
                    </figcaption>
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <img className="img-fluid rounded-circle figure-img mx-auto" width="304" height="236" src={AppIcon} width={150} alt="Image"/>
                    <figcaption className="figure-caption">
                    <h4>App-like feel</h4>
                    <p>It does not feel like a website, but rather an an app as much as possible.</p>           
                    </figcaption>
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <img className="img-fluid rounded-circle figure-img mx-auto" width="304" height="236" src={DiscoverIcon} width={150} alt="Image"/>
                    <figcaption className="figure-caption">
                    <h4>Discoverable</h4>
                    <p>Search engines and SEO optimization</p>
                    </figcaption>
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <img className="img-fluid rounded-circle figure-img mx-auto" width="304" height="236" src={FastIcon} width={150} alt="Image"/>
                    <figcaption className="figure-caption">
                    <h4>Fast and Dynamic</h4>
                    <p>Fast, interactive and lighter dymanic website. </p>
                    </figcaption>
                    </section>

                </div> {/*---------end of row div*/}
            </div> {/*-----------end of service div*/}

            <div className="container">
                <div className="row">
                    <div className="container col-sm-8">
                                <figure>
                                <img className="img-fluid rounded border border-info" src={ProfilePic} width={350} alt="Suraj Pic"/>
                                <figcaption>
                                    <h3>Who's this guy? </h3>
                                <p>I'm the Software Engineer. I have more than 2 years of experience in mobile development and  web development in Nepal. Currently, I am working as Java Tutor in Charles Sturt University, Sydney, Australia. I always think of implementing mobile device in agriculture, finance and  health and for the betterment of human kind.
                                I will make something special.</p>
                                </figcaption>
                                <a class="text-primary btn btn-outline-info btn-lg"  href="https://www.linkedin.com/in/mrsurajpokhrel/" role="button">
                                    My LinkedIn Profile <LinkedInIcon/> </a>
                                </figure>
                    </div>

                    <div className="container alert alert-light col-sm-4" role="alert">
                        <h3>Specification </h3>

                        <h5> Java</h5>
                        <div className="progress">
                            <div class=" bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}>
                            Java 65%
                            </div>
                        </div>
                        <h5> JavaScript</h5>
                        <div className="progress">
                            <div class="bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                            JavaScript 60%
                            </div>
                        </div>
                        <h5> SQL</h5>
                        <div className="progress">
                            <div class="bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
                            Java 50%
                            </div>
                        </div>
                        <h5> React</h5>
                        <div className="progress">
                            <div class="bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
                            React 50%
                            </div>
                        </div>

                         <h5> Bootstrap</h5>
                        <div className="progress">
                            <div class=" bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                            Bootstrap 60%
                            </div>
                        </div>

                           <h5> HTML</h5>
                        <div className="progress">
                            <div class=" bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                            HTML 80%
                            </div>
                        </div>

                           <h5> CSS</h5>
                        <div className="progress">
                            <div class="bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                            CSS 60%
                            </div>
                        </div>
                    

                       
                    </div>



                </div>
            </div>
        
        </div>
    )
  }
}
