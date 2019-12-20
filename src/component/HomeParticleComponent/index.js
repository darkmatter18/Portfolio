import React from 'react';

import Particles from 'react-particles-js';
import { particleConfig } from '../../utils/particlesjs-config';


class HomeParticleComponent extends React.Component {


    render() {

        return (
            <React.Fragment>
                <div style={{ backgroundColor: '#000000', zIndex: 0, position: 'absolute', height: '100%', width: '100%' }}>
                    <Particles params={particleConfig} />
                </div>

            </React.Fragment>
        )
    }
}

export default HomeParticleComponent;