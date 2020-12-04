import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ArrowDownwardRounded from '@material-ui/icons/ArrowDownwardRounded';

import HomeContactModal from '../HomeContactModal';
import { RESUME_LINK } from "../../../constant";

class HomeContactButtons extends React.Component {
    state = { open: false }

    onGitButtonClick = (e) => {
        e.preventDefault();
        this.setState({ open: true })
    }

    OnModalClose = () => {
        this.setState({ open: false })
    }


    onResButtonClick = (e) => {
        e.preventDefault();
        window.open(RESUME_LINK)
    }

    render() {

        const { open } = this.state;

        return (
            <React.Fragment>
                <Grid container  justify="center" style={{ paddingBottom: '3rem' }}>
                    <Grid item style={{marginRight: 10}}>
                        <Button variant="outlined" onClick={this.onGitButtonClick}>
                            Get in Touch
                    </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={this.onResButtonClick}>
                            <ArrowDownwardRounded />
                            Resume
                    </Button>
                    </Grid>
                </Grid>

                <HomeContactModal open={open} close={this.OnModalClose} modalkey="git"/>
            </React.Fragment>
        )
    }
}

export default HomeContactButtons;