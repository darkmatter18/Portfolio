import React from 'react';
import { CssBaseline } from '@material-ui/core';

import RouteComponent from './routes';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <RouteComponent/>
      </React.Fragment>
    )
  }
}

export default App;
