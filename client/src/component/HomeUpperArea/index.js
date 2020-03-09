import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import HomeSocialButton from '../HomeSocialButton';
import { LINKEDIN_LINK, GITHUB_LINK, FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK } from './../../utils/config';
import HomeParticleComponent from '../HomeParticleComponent';


class HomeUpperArea extends React.Component {
    render() {
        const s = " | ";
        return (
            <Grid container alignItems="center" style={{ backgroundColor: '#000000', height: '100%', minHeight: '760px', width: '100%' }}>

                <HomeParticleComponent />

                {/* <div style={{ marginLeft: '93%' }}>

                </div> */}

                <Grid container alignItems="center" style={{ zIndex: 2, margin: '15% 0 0 0' }}>
                    <Grid item lg={12}>
                        <Typography align="center" variant="h5" style={{ fontFamily: 'poppins-bold, sans-serif', color: '#00ad45' }}>
                            HELLO, WORLD.
                        </Typography>
                        <Typography align="center" variant="h1" style={{ fontFamily: 'poppins-medium, sans-serif', color: '#ffffff' }}>
                            I'm Arkadip
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container style={{ zIndex: 2, margin: '0 0 0 0' }}>
                    <Grid item lg={12}>
                        <Typography align="center" variant="h5" style={{ color: '#ffffff' }}>
                            {`${s}`}
                            <span>Deep Learning</span>
                            {`${s}`}
                            <span>Machine Learning</span>
                            {`${s}`}
                            <span>Web Developer</span>
                            {`${s}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={5} style={{ zIndex: 2, color: '#ffffff', margin: '0' }}>
                    <Grid item >
                        <HomeSocialButton iName="fab fa-linkedin" link={LINKEDIN_LINK} />
                    </Grid>
                    <Grid item>
                        <HomeSocialButton iName="fab fa-github" link={GITHUB_LINK} />
                    </Grid>
                    <Grid item>
                        <HomeSocialButton iName="fab fa-facebook" link={FACEBOOK_LINK} />
                    </Grid>
                    <Grid item>
                        <HomeSocialButton iName="fab fa-instagram" link={INSTAGRAM_LINK} />
                    </Grid>
                    <Grid item>
                        <HomeSocialButton iName="fab fa-twitter" link={TWITTER_LINK} />
                    </Grid>
                </Grid>

                <Grid container justify="center" style={{ zIndex: 2, color: '#ffffff', margin: '0' }}>
                    <Grid item lg={12}>
                        <Typography align="center">
                            <HomeSocialButton iName="fas fa-chevron-down" link="#about" />
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default HomeUpperArea;
