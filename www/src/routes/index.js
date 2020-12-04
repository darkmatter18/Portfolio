import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HOME, PROJECTS } from './routes';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Page404 from '../pages/404';



const RouteComponent = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={HOME} exact component={Home} />
                    <Route path={PROJECTS} exact component={Projects} />
                    <Route path="*" component={Page404}/>
                </Switch>
            </Router>
        </div>
    )
}

export default RouteComponent;