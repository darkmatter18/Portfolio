import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomeUpperArea from '../../component/HomeUpperArea';
import HomeAboutArea from '../../component/HomeAboutArea';
import HomeEducationArea from '../../component/HomeEducationArea';
import HomeContactArea from '../../component/HomeContactArea';

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