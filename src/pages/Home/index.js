import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomeUpperArea from '../../conponent/HomeUpperArea';
import HomeAboutArea from '../../conponent/HomeAboutArea';
import HomeEducationArea from '../../conponent/HomeEducationArea';
import HomeContactArea from '../../conponent/HomeContactArea';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ParallaxProvider>
                    <HomeUpperArea />
                    <HomeAboutArea />
                    <HomeEducationArea />
                    <HomeContactArea />
                </ParallaxProvider>
            </React.Fragment >
        );
    }
}

export default Home;