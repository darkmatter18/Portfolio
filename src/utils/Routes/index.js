import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HOME, ABOUT, PROJECTS } from './routes';
import Home from './../../pages/Home';
import About from './../../pages/About';
import Projects from './../../pages/Projects';

const RouteComponent = () => {
    return (
        <div>
            <Router>
                <div>
                    <Route path={HOME} exact component={Home} />
                    <Route path={ABOUT} exact component={About} />
                    <Route path={PROJECTS} exact component={Projects} />
                </div>
            </Router>
        </div>
    )
}

export default RouteComponent;