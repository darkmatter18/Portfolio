/**
 *    Copyright 2019 Arkadip Bhattacharya

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';

import HomeSocialButton from '../HomeSocialButton';
import { LINKEDIN_LINK, GITHUB_LINK, FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK } from './../../utils/config';
import HomeParticleComponent from '../HomeParticleComponent';

const style = (theme) => ({
    background: {
        backgroundColor: '#000000',
        height: window.innerHeight,
        width: window.innerWidth
    },
    upperHeading: {
        fontFamily: 'poppins-bold, sans-serif',
    },
    mainHeading: {
        fontFamily: 'poppins-medium, sans-serif',
        color: '#ffffff'
    },
    subHeading: {
        color: '#ffffff'
    },
    buttons: { 
        zIndex: 2,
        color: '#ffffff',
        margin: '0'
    }
})

class HomeUpperArea extends React.Component {
    render() {

        const { classes } = this.props;

        const s = " | ";
        return (
            <Grid container alignItems="center" className={classes.background}>

                <HomeParticleComponent />

                <Grid container alignItems="center" style={{ zIndex: 2, margin: '15% 0 0 0' }}>
                    <Grid item lg={12}>
                        <Typography align="center" variant="h5" color="secondary" className={classes.upperHeading}>
                            HELLO, WORLD.
                        </Typography>
                        <Typography align="center" variant="h1" className={classes.mainHeading}>
                            I'm Arkadip
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container style={{ zIndex: 2, margin: '0 0 0 0' }}>
                    <Grid item lg={12}>
                        <Typography align="center" variant="h5" className={classes.subHeading}>
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

                <Grid container justify="center" spacing={5} className={classes.buttons}>
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

                <Grid container justify="center" className={classes.buttons}>
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

export default withStyles(style)(HomeUpperArea);
