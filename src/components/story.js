import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import News from './news/News';
import Blogs from './blogs';
import NewsFeedIcon from 'react-icons/lib/ti/news';
import BlogsIcon from 'react-icons/lib/md/library-books';

const Story = () => (
  <Router>
    <div>
                  <nav className="nav nav-pills nav-justified">         
                  <Link className="nav-item text-info"  to="/"><h1><NewsFeedIcon/> </h1>News Feed</Link>
                  <Link className="nav-item text-info" to="/blog"><h1><BlogsIcon/></h1> Blogs</Link>
                  </nav>

      <Route exact path="/" component={News} />
      <Route path="/blog" component={Blogs}/>
      
    </div>
  </Router>
);


export default Story;