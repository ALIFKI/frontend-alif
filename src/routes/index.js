import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import HomePage from '../Page/HomePage';


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
                <Router>
                    <Switch>
                        <Route path="" exact component={HomePage}></Route>
                    </Switch>
                </Router>
        )
    }
}

export default Routes
