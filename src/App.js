import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import RouteComponent from './utils/Routes';
import './App.css';

class App extends React.Component {

  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <RouteComponent />
      </React.Fragment>
    );
  }
}

export default App;
