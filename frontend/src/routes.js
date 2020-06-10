import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App2 from './views/App3'
import Home from './views/Home'
import Login from './views/Login'
import About from './views/About'
import CreateUser from './views/CreateUser'
import CreateFlow from './views/CreateFlow'
import Table from './components/RenderTable'

export default Views => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component ={App2}/>
                <Route path = "/home" exact component ={Home}/>
                <Route path = "/login" exact component ={Login}/>
                <Route path = "/sobre" exact component ={About}/>
                <Route path = "/usuario" exact component ={CreateUser}/>
                <Route path = "/despesa" exact component ={CreateFlow}/>
                <Route path = "/fluxo-caixa" exact component ={Table}/>
            </Switch>
        </BrowserRouter>
        </>
    )
}