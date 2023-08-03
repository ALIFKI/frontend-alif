import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route, BrowserRouter } from 'react-router-dom'
import HomePage from '../Page/HomePage';
// import { WavyContainer, WavyLink } from "react-wavy-transitions";

class Routes extends Component {
    constructor(props){
        super(props)
        this.state = {
            routeList : [
                {
                    path : '/',
                    components : HomePage
                }
            ]
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div id='react-bubble_effect-container'></div>
                <Router>
                    <Switch>
                        <Route path="" exact component={HomePage}></Route>
                    </Switch>
                </Router>
            </BrowserRouter>
        )
    }
}

export default Routes
