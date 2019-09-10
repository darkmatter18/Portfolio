import React from 'react';

import HomeUpperArea from '../../conponent/HomeUpperArea';
import HomeAboutArea from '../../conponent/HomeAboutArea';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HomeUpperArea />
                <HomeAboutArea />
            </React.Fragment >
        );
    }
}

export default Home;