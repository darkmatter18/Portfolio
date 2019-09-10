import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomeUpperArea from '../../conponent/HomeUpperArea';
import HomeAboutArea from '../../conponent/HomeAboutArea';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ParallaxProvider>
                    <HomeUpperArea />
                    <HomeAboutArea />
                </ParallaxProvider>
            </React.Fragment >
        );
    }
}

export default Home;