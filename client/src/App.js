import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import RouteComponent from './routes';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouteComponent />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
