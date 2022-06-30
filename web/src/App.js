import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import RouteComponent from './routes';
import theme from './theme';

class App extends React.Component {
  componentDidMount() {
    //SetAdsense
    let script = document.createElement('script');
    script.setAttribute('data-ad-client', 'ca-pub-4077277774959103');
    script.setAttribute('async', "");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.getElementsByTagName('head')[0].appendChild(script);
  }
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
