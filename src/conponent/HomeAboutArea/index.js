import React from 'react';
import { Grid, Typography, } from '@material-ui/core';

import logo from './logo.jpeg';
import HomeContactButtons from '../HomeContactButtons';

class HomeAboutArea extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="#about"></div>
                <Grid container justify="center" style={{ paddingTop: '8rem' }}>
                    <Grid item lg={12}>
                        <Typography align="center" variant="h4" style={{ fontFamily: 'poppins-bold, sans-serif', color: '#00ad45' }}>
                            About
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={3} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                    <Grid item  >
                        <img src={logo} alt="logo" style={{ maxHeight: '10rem' }} />
                    </Grid>

                    <Grid item >
                        <Typography align="center" variant="body1" style={{ maxWidth: '30rem', top: '50%' }}>
                            Computer Science Undergraduate at Government College of Engineering and Textile Technology, Berhampore. Interested in Deep Learning, Machine Learning and Web Development
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={10} style={{paddingBottom: '2rem'}}>
                    <Grid item >
                        <Typography align="left" variant="h5">
                            Personal Info
                        </Typography>

                        <div style={{ paddingTop: '2rem' }}>
                            <Typography align="left" variant="h6">
                                Full Name:
                            </Typography>
                            <Typography align="left" variant="body2">
                                Arkadip Bhattacharya
                            </Typography>
                        </div>

                        <div style={{ paddingTop: '2rem' }}>

                            <Typography align="left" variant="h6">
                                Date Of Birth:
                            </Typography>
                            <Typography align="left" variant="body2">
                                November 07, 1999
                            </Typography>
                        </div>

                        <div style={{ paddingTop: '2rem' }}>

                            <Typography align="left" variant="h6">
                                Email:
                            </Typography>
                            <a href="mailto: in2arkadipb13@gmail.com">
                                <Typography align="left" variant="body2">
                                    in2arkadipb13@gmail.com
                                </Typography>
                            </a>
                        </div>

                        <div style={{ paddingTop: '2rem' }}>

                            <Typography align="left" variant="h6">
                                Website:
                            </Typography>
                            <a href="https://darkmatter18.cf">
                                <Typography align="left" variant="body2">
                                    https://darkmatter18.cf
                                </Typography>
                            </a>
                        </div>
                    </Grid>

                    <Grid item lg={2}> </Grid>

                    <Grid item >
                        <Typography align="center" variant="h5">
                            Skills
                        </Typography>

                        <Typography align="center" variant="subtitle1" style={{ maxWidth: '20rem', paddingTop: '2rem' }}>
                            Pytorch, Tensorflow, Scikit-Learn, Deep Learning, Machine Learning, MatLab
                        </Typography>

                        <Typography align="center" variant="subtitle1" style={{ maxWidth: '20rem', paddingTop: '2rem' }}>
                            React.js, JavaScript, Django, PHP, MySQL,  HTML, CSS,
                        </Typography>

                        <Typography align="center" variant="subtitle1" style={{ maxWidth: '20rem', paddingTop: '2rem' }}>
                            Data Structure and Algorithm, OOPS, Python, C, C++, Java,
                        </Typography>

                        <Typography align="center" variant="subtitle1" style={{ maxWidth: '20rem', paddingTop: '2rem' }}>
                            Ubuntu, Linux, Google Cloud Platform (GCP), Git, Github
                        </Typography>
                    </Grid>
                </Grid>

                <HomeContactButtons />
            </React.Fragment>
        )
    }
}

export default HomeAboutArea;