import React from 'react'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Menu from './core/Menu'

import Home from './core/Home'
import Admin from './admin/AdminDashboard'
import AddCourse from './admin/addCourse'

const Routes = () => {
    return (
    <BrowserRouter>
    <Menu />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/admin" exact component={Admin}/>
            <Route path="/admin/course/add" exact component={AddCourse}/>
        </Switch>
    </BrowserRouter>)
}
export default Routes;