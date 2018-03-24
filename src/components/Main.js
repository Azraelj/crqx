import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import WorkList from './WorkList';
import About from './About';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/work" component= {WorkList}/>
                    <Route path="/about" component= {About}/>
                </Switch>
            </div>
        )
    }
}

export default Main;