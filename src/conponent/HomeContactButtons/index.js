import React from 'react';
import { Grid, Button, Modal, Fade, Backdrop } from '@material-ui/core';
import ArrowDownwardRounded from '@material-ui/icons/ArrowDownwardRounded';

class HomeContactButtons extends React.Component {
    state = { open: false }

    onGitButtonClick = (e) => {
        e.preventDefault();
        console.log('Modal Open')
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
                        <div>
                            <h2 id="transition-modal-title">Transition modal</h2>
                            <p id="transition-modal-description">react-transiton-group animates me.</p>
                        </div>
                    </Fade>
                </Modal>
            </React.Fragment>
        )
    }
}

export default HomeContactButtons;