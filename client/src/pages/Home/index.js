import React from 'react';

import HomeUpperArea from '../../component/HomeUpperArea';
import HomeAboutArea from '../../component/HomeAboutArea';
import HomeEducationArea from '../../component/HomeEducationArea';
import HomeContactArea from '../../component/HomeContactArea';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HomeUpperArea />
                <HomeAboutArea />
                <HomeEducationArea />
                <HomeContactArea />
            </React.Fragment >
        );
    }
}

export default Home;