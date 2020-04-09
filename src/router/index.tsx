import React, { useContext, ReactElement } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "../screens/home"
import About from "../screens/about"

import NotFound from "../screens/not-found"

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={ NotFound } />
            </Switch>
        </Router>
    )
}

export default AppRouter
