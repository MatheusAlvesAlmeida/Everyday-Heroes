import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewAddress from './pages/NewAddress';
import Home from './pages/Home'
import Donate from './pages/Donate'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/address/new" component={NewAddress} />
                <Route path="/home" component={Home} />
                <Route path="/donate" component={Donate} />
            </Switch>
        </BrowserRouter>
    );
}