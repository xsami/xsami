import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from '../home';
import About from '../about';
import Projects from '../projects';

export default class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route path="/layout" children={() => <h2>This will always be rendered</h2>} />
                    <Route exact path="/"  component={Home}/>
                    <Route exact path="/about"  component={About}/>
                    <Route exact path="/projects"  component={Projects}/>
                </div>
            </Router>
        )
    }
}