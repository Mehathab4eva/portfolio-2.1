import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Career from "./components/Career.js";
import ContactMe from "./components/ContactMe.js";
import Intro from './components/Intro.js';
import FooterBlock from './components/FooterBlock.js';


import ParticleContainer from './ParticleContainer.js';
import HeaderBlock from './components/HeaderBlock.js';
 


class App extends Component {

constructor(){
  super()
  this.state = {

        
  }
}

render() {

        
    return (
      <div>

        <Router>
            
            <div>

                <HeaderBlock />
            <ParticleContainer  />
            <Switch>


                <Route exact path='/' component={Intro} />
                <Route exact path='/about' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/career' component={Career} />
                <Route exact path='/contactMe' component={ContactMe} />

            </Switch>
            <FooterBlock />

            </div>
        </Router>
      </div>
        );
    }
  
}

export default App;

