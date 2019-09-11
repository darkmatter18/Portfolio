import React from 'react';
import { Grid, Button, Modal, Fade, Backdrop, Card, CardContent, Typography } from '@material-ui/core';
import ArrowDownwardRounded from '@material-ui/icons/ArrowDownwardRounded';
import HomeModalForm from '../HomeModalForm';

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
        window.open('')
    }

    render() {

        const { open } = this.state;

        return (
            <React.Fragment>
                <Grid container spacing={5} justify="center" style={{ paddingBottom: '3rem' }}>
                    <Grid item>
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

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={this.OnModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}

                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >

                    <Fade in={open}>
                        <Card style={{ maxWidth: '24rem' }}>
                            <CardContent>
                                <Typography variant="h5" align="left" id="transition-modal-title">
                                    Form
                                    </Typography>
                                <Typography variant="body2" align="left" id="transition-modal-description">
                                    Fill the form and I will contact you as soon as possible
                                    </Typography>

                                <HomeModalForm />

                            </CardContent>
                        </Card>
                    </Fade>
                </Modal>
            </React.Fragment>
        )
    }
}

export default HomeContactButtons;