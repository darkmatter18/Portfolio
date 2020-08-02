import React from 'react';
import Router from "./Router";
import {AuthProvider} from 'jwt-auth-react'

const App = () => {

    return (
        <React.Fragment>
            <AuthProvider>
                <Router/>
            </AuthProvider>
        </React.Fragment>
    );
}

export default App;
