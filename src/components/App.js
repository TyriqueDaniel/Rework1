import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import Intro from './Intro';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
      <Route exact path="/Intro" component={Intro} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/teachers" component={Teachers}/>
      <Route path="/teachers/:topic/:name" component={Featured}/>
      <Route path="/courses" component={Courses}/>
      <Route  component={NotFound}/>

      </Switch>

    </div>
  </BrowserRouter>
);

export default App;