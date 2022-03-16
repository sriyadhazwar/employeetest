import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import DashboardView from "./views/DashboardView";
import PostView from "./views/PostView";
import UserView from "./views/UserView";
import PostByTagView from "./views/PostByTagView";
import Timeout from "./views/Timeout";
import Notfound from "./views/Notfound";

class Router extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to="/user"/>
                <Route exact path="/user" component={DashboardView}/>
                <Route path="/user/:userID/post" component={PostView}/>
                <Route path="/user/:userID" component={UserView}/>
                <Route exact path="/tag/:postTag/post" component={PostByTagView}/>
                <Route path='/timeout' component={Timeout}/>
                <Route component={Notfound}/>
            </Switch>
        );
    }
}

export default Router;