import React from 'react';
import Particles from "react-tsparticles";

import { withStyles } from '@material-ui/core';

const style = (theme) => ({
    main: {
        zIndex: 0,
        position: 'absolute',
        minHeight: '100vh',
    },
});

const particleConfig = {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#096b48"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 0.7,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 10,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.6
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
};

class HomeParticleComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={this.props.classes.main}>
                    <Particles params={particleConfig}/>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(style)(HomeParticleComponent);