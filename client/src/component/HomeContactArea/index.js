import React from "react";
import { Grid, Typography, Container, Button } from "@material-ui/core";
import HomeContactModal from "../HomeContactModal";
import VersionInfo from "../VersionInfo";

import { EMAIL_ID } from "./../../utils/config";

class HomeContactArea extends React.Component {
  state = { modalOpen: false };

  onContactButtonClick = () => {
    this.setState({ modalOpen: true });
  };

  onModalClose = () => {
    console.log("Modal Close");

    this.setState({ modalOpen: false });
  };

  render() {
    const year = new Date().getFullYear();
    const { modalOpen } = this.state;

    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
          <Grid container justify="center" style={{ paddingTop: "6rem" }}>
            <Grid item lg={12}>
              <Typography
                align="center"
                variant="h5"
                style={{
                  fontFamily: "poppins-bold, sans-serif",
                  color: "#00ad45"
                }}
              >
                Contact
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ paddingTop: "1rem" }}>
            <Grid item lg={12}>
              <Typography
                align="center"
                variant="h4"
                style={{
                  fontFamily: "poppins-bold, sans-serif",
                  color: "#ffffff"
                }}
              >
                I'd Love To Hear From You.
              </Typography>
            </Grid>
          </Grid>

          <Container style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
            <Grid container spacing={2} justify="center">
              <Grid item lg={4}>
                <Typography align="center">
                  <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                </Typography>

                <Typography
                  variant="h5"
                  align="center"
                  style={{ marginTop: "6px", marginBottom: "12px" }}
                >
                  Where to Find Me
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="center"
                  style={{ opacity: 0.6 }}
                >
                  South Raipur, <br />
                  Mankar (713144) <br />
                  Pubra Burddhaman <br />
                  West Bengal, INDIA
                </Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography align="center">
                  <i className="fas fa-envelope fa-2x"></i>
                </Typography>

                <Typography
                  variant="h5"
                  align="center"
                  style={{ marginTop: "6px", marginBottom: "12px" }}
                >
                  E-Mail me at
                </Typography>

                <Typography
                  variant="subtitle2"
                  align="center"
                  style={{ opacity: 0.6 }}
                >
                  {EMAIL_ID}
                  <br />
                </Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography align="center">
                  <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                </Typography>

                <Typography
                  variant="h5"
                  align="center"
                  style={{ marginTop: "6px", marginBottom: "12px" }}
                >
                  Contact
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="center"
                  style={{ opacity: 0.6 }}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={this.onContactButtonClick}
                  >
                    Ask for Number
                  </Button>
                </Typography>
              </Grid>
            </Grid>

            <Grid container style={{ paddingTop: "6rem" }} justify="center">
              <Grid item lg={6} sm={12} md={12}>
                <Typography align="left" variant="body1">
                  &copy; Arkadip, {year}
                </Typography>
              </Grid>
              <Grid item lg={6} sm={12} md={12}>
                <Typography align="right">
                  <VersionInfo />
                </Typography>
              </Grid>
            </Grid>

            <Grid container justify="center">
              <Grid item lg={12} sm={12} md={12}>
                <Typography align="center">
                  Made with 💚 by <b>Arkadip</b>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <HomeContactModal open={modalOpen} close={this.onModalClose} />
      </React.Fragment>
    );
  }
}

export default HomeContactArea;
