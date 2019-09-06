import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HOME, ABOUT, PROJECTS } from './routes';
import Home from './../../pages/Home';

const RouteComponent = () => {
    return (
        <div>
            <Router>
                <div>
                    <Route path={HOME} exact component={Home} />
                </div>
            </Router>
        </div>
    )
}

export default RouteComponent;