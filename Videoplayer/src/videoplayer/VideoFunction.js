import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import CourseStru from './CourseStru';
function VideoFunction() {
    return (
        <div className="container">
            <BrowserRouter>
            <Switch>
            <Route exact  path='/' component={Home}/>
            <Route path="/:coursename" component={CourseStru}/>
            </Switch>
            </BrowserRouter>
        </div>
    );
}

export default VideoFunction;