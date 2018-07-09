import React from "react";
import { HashRouter,Route, Switch, Link } from "react-router-dom";
import FolderIcon from 'react-icons/lib/md/folder';
import GraduateIcon from 'react-icons/lib/md/school';
import SettingIcon from 'react-icons/lib/md/perm-data-setting';
import {master,bachelor, highschool, trainingA, trainingB, trainingC, workA, workB, workC,workD} from './lib'


const Works = ({ routes }) => (
  <div>
      
        <div className="card border-info">
          <div class="card-header text-secondary">
          <h2>My Works</h2>
          </div>
                <div className="row">
                    <div className="col col-sm-6">
                        <ul>
                          <li>
                            <Link  className=" text-info" to="/work/w1">QR Ticketing System</Link>
                          </li>
                          <li>
                            <Link   className=" text-info" to="/work/w2">Andriod Application</Link>
                          </li>
                          <li>
                            <Link  className=" text-info" to="/work/w3">Desktop Application</Link>
                          </li>
                          <li>
                            <Link  className=" text-info" to="/work/w4">Portfolio</Link>
                          </li>
                        </ul>
                    </div>

                    <div className="col col-sm-6">
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}

                    </div>
              </div>
      </div>      

  </div>
);

const Training = ({ routes }) => (

  <div>
      
  <div className="card border-info">
    <div class="card-header text-secondary">
    <h2>Further Training</h2> 
    </div>
          <div className="row">
              <div className="col col-sm-6">
                  <ul>
                    <li>
                      <Link className=" text-info" to="/training/aa">Mobile Application</Link>
                    </li>
                    <li>
                      <Link className=" text-info" to="/training/bb">Java Certificate</Link>
                    </li>
                    <li>
                      <Link className=" text-info" to="/training/cc">Lynda Tutorials</Link>
                    </li>
                  </ul>
              </div>

              <div className="col col-sm-6">
                  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}

              </div>
        </div>
</div>      

</div>

);

const Study = ({ routes }) => (
  <div>
      
        <div className="card border-info">
          <div class="card-header text-secondary">
          <h3>Formal Study</h3> 
          </div>
                <div className="row">
                    <div className="col col-sm-6">
                        <ul>
                          <li>
                            <Link className=" text-info" to="/study/master">Software Design and Development</Link>
                          </li>
                          <li>
                            <Link className=" text-info" to="/study/bachelor">Computer Engineering</Link>
                          </li>
                          <li>
                            <Link className=" text-info" to="/study/highschool">High School</Link>
                          </li>
                        </ul>
                    </div>

                    <div className="col col-sm-6">
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}

                    </div>
              </div>
      </div>      

  </div>
);

const Master =()=> <div>{master} </div>
const Bachelor=()=> <div> {bachelor}</div>
const HighSchool=()=> <div> {highschool}</div>
const TrainingA=()=> <div>{trainingA} </div>
const TrainingB=()=><div>{trainingB} </div>
const TrainingC=()=> <div> {trainingC}</div>
const WorkA=()=> <div>{workA}</div>
const WorkB=()=> <div> {workB}</div>
const WorkC=()=> <div> {workC}</div>
const WorkD=()=> <div>{workD} </div>

const Bus = () => <div>
  <h3>Bus</h3>
  <p>
§ Highsenseoforganizationandteamspirits.
§ Resultoriented,self-driven,highlymotivated.
§ Skilldevelopingbusinessplansandrequirements.
§ Flexibility,goodcommunicationskills.
§ Goodabilitytoadapttothemulticulturalenvironment.
  </p>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>

  
const Cart = () => <div>
<h3>Cart</h3>
<p>
§ Highsenseoforganizationandteamspirits.
§ Resultoriented,self-driven,highlymotivated.
§ Skilldevelopingbusinessplansandrequirements.
§ Flexibility,goodcommunicationskills.
§ Goodabilitytoadapttothemulticulturalenvironment.
</p>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>


////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/training",
    component: Training,
    routes: [
      {
        path: "/training/aa",
        component: TrainingA
      },
      {
        path: "/training/bb",
        component: TrainingB
      },
      {
        path:"/training/cc",
        component: TrainingC
      }
    ]
  },
  {
    path: "/work",
    component: Works,
    routes: [
      {
        path: "/work/w1",
        component: WorkA
      },
      {
        path: "/work/w2",
        component: WorkB
      },
      {
        path:"/work/w3",
        component: WorkC
      },
      {
        path:"/work/w4",
        component:WorkD
      }

    ]
  },
  {
    path: "/study",
    component: Study,
    routes: [
      {
        path: "/study/master",
        component: Master
      },
      {
        path: "/study/bachelor",
        component: Bachelor
      },
      {
        path:"/study/highschool",
        component: HighSchool
      }
    ]
  }
  
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const Protfolio = () => (
  <HashRouter>
    <div>
              <nav className="nav nav-pills nav-justified">
              <Link  className="nav-item text-info" to="/work"><h1><FolderIcon/> </h1 > Works</Link>
          
              <Link className="nav-item text-info" to="/training"><h1><SettingIcon/></h1> Training</Link>

              <Link className="nav-item text-info" to="/study"><h1><GraduateIcon/></h1> Study</Link>
              </nav>
			
        

      
          
                      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                
   </div>
  </HashRouter>
);

export default Protfolio;