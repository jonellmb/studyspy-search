import React from 'react'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Menu from './core/Menu'

import Home from './core/Home'
import Admin from './admin/AdminDashboard'
import AddCourse from './admin/addCourse'
import Search from './core/Search'

const Routes = () => {
    return (
    <BrowserRouter>
    <Menu />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/admin" exact component={Admin}/>
            <Route path="/admin/course/add" exact component={AddCourse}/>
            <Route path="/search" exact component={Search}/>
        </Switch>
    </BrowserRouter>)
}
export default Routes;