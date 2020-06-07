import React from 'react';
import { Modal, Fade, Card, CardContent, Typography, Backdrop } from '@material-ui/core';
import HomeModalForm from '../HomeModalForm';

class HomeContactModal extends React.Component {

    render() {

        const { open, close } = this.props;

        return (
            <React.Fragment>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={close}
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

                                <HomeModalForm modalkey={this.props.modalkey} />

                            </CardContent>
                        </Card>
                    </Fade>
                </Modal>
            </React.Fragment>
        )
    }
}

export default HomeContactModal;