import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Story from './components/story'
import Portfolio from './components/portfolio/portfolio'
import UpIcon from 'react-icons/lib/go/chevron-up';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import TwitterIcon from 'react-icons/lib/io/social-twitter';
import MyEmailIcon from 'react-icons/lib/md/email';
import GithubIcon from 'react-icons/lib/go/mark-github';
import Home from './components/Home'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
<div>
        <nav class="navbar bg-info navbar-dark navbar-expand-sm fixed-top" id="Menu_item1">
                        <div class="container">
                                  <a class="navbar-brand d-sm-inline-block" href="#home">Profile</a>

                                        <button class="navbar-toggler" type="button" 
                                            data-toggle="collapse" data-target="#myTogglerNav" 
                                            aria-controls="myTogglerNav" 
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                
                                        <div class="collapse navbar-collapse" id="myTogglerNav" >
                                              <div class="navbar-nav">
                                                {/* <a class="nav-item nav-link" href="#home">Home</a> */}
                                                <a class="nav-item nav-link" href="#about">About</a>
                                                <a class="nav-item nav-link" href="#portfolio">Portfolio</a>
                                                <a class="nav-item nav-link" href="#blog">Story</a>
                                                <a class="nav-item nav-link" href="#contact">Contact</a>
                                              </div>
                                      </div> { /* -----end of collapse*/}
                                      
                                      <span class="navbar-text d-none d-lg-inline-block">Hi, I'm a Software Engineer.</span>
                            </div>
      </nav>

      <div class="content" id="home">
              <Home/>
      </div>

    <div class="container">

              <div className="container-fluid text-center" id="about">
              <br/><br/><br/>
              <h2>About</h2><br/>
              <AboutMe/>
              </div>


               <div className="container"  id="portfolio">
               <br/><br/><br/>
              {/* <h2 class=" container" id="blog"> Blog </h2> */}
                <h2 className="text-center"> Portfolio </h2><br/>

                <Portfolio/>

              </div>

              

              <div class="container"  id="blog">
              <br/><br/><br/>
              {/* <h2 class=" container" id="blog"> Blog </h2> */}
              <h2 className="text-center"> Story </h2><br/>
                <Story/>
                <hr/>
              </div>


            <div class=" container" id="contact">
             <br/><br/><br/>
                <h2 className=" text-center"> Contact Me </h2>
           
                <ContactMe/>

            </div>
            <br/>

      </div>

 <footer class="App-footer text-center">
                <a class="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
                <h2 className="text-danger"><UpIcon/></h2>
          </a>

  <div className="container row">
   
      <div className="col-md-8">
        <div className="row ">
       SURAJ POKHREL @ 2018
        </div>
        <div className="row ">
          <p>All the Design and Code <a href="#" title="Suraj Pokhrel">mrsurajpokhrel@gmail.com</a></p>
        </div>
     </div>

      <div className="col-md-4">
        <div className="row ">
                <div className="col">
                      <div className="row ">
                            <a href="#" className="card-link text-primary btn btn-outline-light btn-lg"><LinkedInIcon/></a>

                      </div>
                      <div className="row ">LinkedIn
                      </div>  
                </div>
                <div className="col">
                      <div className="row ">
                              <a href="#" className="card-link text-primary btn btn-outline-light btn-lg"><TwitterIcon/></a>

                      </div>
                      <div className="row ">Twitter
                      </div>  
                </div>
                <div className="col">
                      <div className="row ">
                              <a href="https://github.com/Shuraz" className="card-link text-dark btn btn-outline-light btn-lg"><GithubIcon/></a>

                      </div>
                      <div className="row ">Github
                      </div>  
                </div>
                <div className="col">
                      <div className="row ">
           <a href="#" className="card-link text-danger btn btn-outline-light btn-lg"><MyEmailIcon/></a>

                      </div>
                      <div className="row ">Email
                      </div>  
                </div>
        </div>
    </div>

    
  </div>
      
         
</footer>


</div>
    );
  }
}

export default App;
