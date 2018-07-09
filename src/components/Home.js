import React, { Component } from 'react';
import DownIcon from 'react-icons/lib/ti/download';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Pic from './pic.png';




class Home extends Component {
  render() {
    return (
    
<div class="jumbotron_home text-center">
    
         <h1>Hello, I'm Suraj Pokhrel.
           
         </h1>
         
  <a class="btn btn-outline-danger btn-lg"  href="#portfolio" role="button">
   View My Work <DownIcon/>
  </a>
  <div class="typewriter text-warning">
  <h1>I am a full stack web developer.</h1> 
  </div>
  <p>I am eagerly excited to work with new exciting team and on cutting edge technology.</p> 

              <div className="container text-center"  id="services">
                <div className="row">
                    <section className="col-sm-6 col-md-3" >
  <div style={{ width: '100px' }}>
  <CircularProgressbar
  percentage={90}
  initialAnimation={1}
  text={`${90}%`}
  styles={{
    path: { stroke: `rgba(241, 196, 15, ${90 / 100})` },
    text: { fill: '#fff', fontSize: '16px' },
  }}
/>
<h4>Research</h4>
 </div>
                   
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <div style={{ width: '100px' }}>
  <CircularProgressbar
  percentage={65}
  initialAnimation={1}
  text={`${65}%`}
  styles={{
    path: { stroke: `rgba(241, 196, 15, ${65 / 100})` },
    text: { fill: '#fff', fontSize: '16px' },
  }}
/>
<h4>Management</h4>
 </div>
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <div style={{ width: '100px' }}>
  <CircularProgressbar
  percentage={60}
  initialAnimation={1}
  text={`${60}%`}
  styles={{
    path: { stroke: `rgba(241, 196, 15, ${60 / 100})` },
    text: { fill: '#fff', fontSize: '16px' },
  }}
/>
<h4>Design</h4>
 </div>
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <div style={{ width: '100px' }}>
  <CircularProgressbar
  percentage={70}
  initialAnimation={1}
  text={`${70}%`}
  styles={{
    path: { stroke: `rgba(241, 196, 15, ${70 / 100})` },
    text: { fill: '#fff', fontSize: '16px' },
  }}
/>
<h4>Development</h4>
 </div>
                    </section>

                </div> {/*---------end of row div*/}
            </div> {/*-----------end of service div*/}

</div>
    );
  }
}

export default Home;
