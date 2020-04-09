import React from "react"
import { View } from "react-native"
import { NativeRouter as Router, Switch, Route, Link } from "react-router-native"
import About from "../screens/about"
import Home from "../screens/home"
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
