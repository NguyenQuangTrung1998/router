import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Contact from './components/Contact';
import Recommend from './components/Recommend';
class App extends Component{
  render(){
    return (
     <Router>
       <div>
       <Breadcrumb>
        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/recommend/">recommend</Link></BreadcrumbItem>
        <BreadcrumbItem >
        <Link to="/Contact/">Contact</Link>
        </BreadcrumbItem>
      </Breadcrumb>
       </div>
       <Route path="/" exact/>
       <Route path="/Contact/" exact>
         <Contact />
       </Route>
       <Route path="/Recommend">
         <Recommend />
       </Route>
     </Router>
    );
  }
}

export default App;
