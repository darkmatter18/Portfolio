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
import {Grid, Typography} from '@material-ui/core';

import HomeSocialButton from '../HomeSocialButton';
import {LINKEDIN_LINK, GITHUB_LINK, FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK} from "../../constant";
import HomeParticleComponent from '../HomeParticleComponent';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.common.black,
        height: window.innerHeight,
        width: window.innerWidth
    },
    headingFont: {
        fontFamily: 'poppins-bold, sans-serif',
    },
    headingColor: {
        color: theme.palette.common.white
    },
    buttons: {
        zIndex: 2,
        color: theme.palette.common.white,
        margin: '0'
    }
}))

const HomeUpperArea = () => {

    const classes = useStyles()

    const s = " | ";
    return (
        <Grid container alignItems="center" className={classes.background}>

            <HomeParticleComponent/>

            <Grid container alignItems="center" style={{zIndex: 2, margin: '15% 0 0 0'}}>
                <Grid item lg={12}>
                    <Typography align="center" variant="h5" color="primary" className={classes.headingFont}>
                        HELLO, WORLD.
                    </Typography>
                    <Typography align="center" variant="h1" className={clsx(classes.headingColor, classes.headingFont)}>
                        I'm Arkadip
                    </Typography>
                </Grid>
            </Grid>

            <Grid container style={{zIndex: 2, margin: '0 0 0 0'}}>
                <Grid item lg={12}>
                    <Typography align="center" variant="h5" className={classes.headingColor}>
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
                <Grid item>
                    <HomeSocialButton iName="Linkedin" link={LINKEDIN_LINK}/>
                </Grid>
                <Grid item>
                    <HomeSocialButton iName="Github" link={GITHUB_LINK}/>
                </Grid>
                <Grid item>
                    <HomeSocialButton iName="Facebook" link={FACEBOOK_LINK}/>
                </Grid>
                <Grid item>
                    <HomeSocialButton iName="Instagram" link={INSTAGRAM_LINK}/>
                </Grid>
                <Grid item>
                    <HomeSocialButton iName="Twitter" link={TWITTER_LINK}/>
                </Grid>
            </Grid>

            <Grid container justify="center" className={classes.buttons}>
                <Grid item lg={12}>
                    <Typography align="center" component={"div"}>
                        <HomeSocialButton iName="ChevronDown" link="#about"/>
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default HomeUpperArea
