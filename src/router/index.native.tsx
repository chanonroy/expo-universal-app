import React from "react"
import { View } from "react-native"
import { NativeRouter, Route, Switch } from "react-router-native"
import About from "../screens/about"
import Home from "../screens/home"
import NotFound from "../screens/not-found"

const AppRouter = () => {
    return (
        <NativeRouter>
            <View>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route component={ NotFound } />
                </Switch>
            </View>
        </NativeRouter>
    )
}

export default AppRouter
