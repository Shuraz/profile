import React from "react";
import { HashRouter,Route, Switch, Link  } from "react-router-dom";

import News from './news/News';
import Blogs from './blogs';
import NewsFeedIcon from 'react-icons/lib/ti/news';
import BlogsIcon from 'react-icons/lib/md/library-books';

const Story = () => (
  <HashRouter>
    <div>
                  <nav className="nav nav-pills nav-justified">         
                  <Link className="nav-item text-info"  to="/"><h1><NewsFeedIcon/> </h1>News Feed</Link>
                  <Link className="nav-item text-info" to="/blog"><h1><BlogsIcon/></h1> Blogs</Link>
                  </nav>
<Switch>
      <Route exact path="/" component={News} />
      <Route exact path="/blog" component={Blogs}/>
</Switch>     
    </div>
  </HashRouter>
);


export default Story;