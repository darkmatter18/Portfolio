import React from "react";
import {Grid, Typography} from "@material-ui/core";

import logo from "../../images/logo.jpeg";
import HomeContactButtons from "../HomeContactButtons";
import {WEBSITE_LINK, EMAIL_ID} from "../../constant";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    heading: {
        fontFamily: "poppins-bold, sans-serif",
        color: theme.palette.primary.main
    }
}))

const HomeAboutArea = () => {
    const classes = useStyle()
    return (
        <React.Fragment>
            <div id="about"/>
            <Grid container justify="center" style={{paddingTop: "8rem"}}>
                <Grid item lg={12}>
                    <Typography
                        align="center"
                        variant="h4"
                        className={classes.heading}
                    >
                        About
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                justify="center"
                style={{paddingTop: "2rem", paddingBottom: "2rem"}}
            >
                <Grid item>
                    <img src={logo} alt="logo" style={{maxHeight: "10rem"}}/>
                </Grid>

                <Grid item>
                    <Typography
                        align="center"
                        variant="body1"
                        style={{maxWidth: "30rem", top: "50%"}}
                    >
                        Computer Science Undergraduate at Government College of
                        Engineering and Textile Technology, Berhampore. Interested in Deep
                        Learning, Machine Learning and Web Development
                    </Typography>
                </Grid>
            </Grid>

            <Grid container justify="center" style={{paddingBottom: "2rem"}}>
                <Grid item>
                    <Typography align="left" variant="h5">
                        Personal Info
                    </Typography>

                    <div style={{paddingTop: "2rem"}}>
                        <Typography align="left" variant="h6">
                            Full Name:
                        </Typography>
                        <Typography align="left" variant="body2">
                            <span>Arkadip Bhattacharya</span> <br/>
                            <span style={{fontFamily: "Mina"}}>
                  অর্কদীপ ভট্টাচার্য্য{" "}
                </span>
                            <span>(Bengali)</span>
                        </Typography>
                    </div>

                    <div style={{paddingTop: "2rem"}}>
                        <Typography align="left" variant="h6">
                            Date Of Birth:
                        </Typography>
                        <Typography align="left" variant="body2">
                            November 07, 1999
                        </Typography>
                    </div>

                    <div style={{paddingTop: "2rem"}}>
                        <Typography align="left" variant="h6">
                            Email:
                        </Typography>
                        <a href={`mailto: ${EMAIL_ID}`}>
                            <Typography align="left" variant="body2">
                                {EMAIL_ID}
                            </Typography>
                        </a>
                    </div>

                    <div style={{paddingTop: "2rem"}}>
                        <Typography align="left" variant="h6">
                            Website:
                        </Typography>
                        <a href={WEBSITE_LINK}>
                            <Typography align="left" variant="body2">
                                {WEBSITE_LINK}
                            </Typography>
                        </a>
                    </div>
                </Grid>

                <Grid item lg={2}>
                    {" "}
                </Grid>

                <Grid item>
                    <Typography align="center" variant="h5">
                        Skills
                    </Typography>

                    <Typography
                        align="center"
                        variant="subtitle1"
                        style={{maxWidth: "20rem", paddingTop: "2rem"}}
                    >
                        Pytorch, Tensorflow, Scikit-Learn, Deep Learning, Machine
                        Learning, MatLab
                    </Typography>

                    <Typography
                        align="center"
                        variant="subtitle1"
                        style={{maxWidth: "20rem", paddingTop: "2rem"}}
                    >
                        React.js, JavaScript, Django, PHP, MySQL, HTML, CSS,
                    </Typography>

                    <Typography
                        align="center"
                        variant="subtitle1"
                        style={{maxWidth: "20rem", paddingTop: "2rem"}}
                    >
                        Data Structure and Algorithm, OOPS, Python, C, C++, Java,
                    </Typography>

                    <Typography
                        align="center"
                        variant="subtitle1"
                        style={{maxWidth: "20rem", paddingTop: "2rem"}}
                    >
                        Ubuntu, Linux, Google Cloud Platform (GCP), Git, Github
                    </Typography>
                </Grid>
            </Grid>

            <HomeContactButtons/>
        </React.Fragment>
    );
}

export default HomeAboutArea;
