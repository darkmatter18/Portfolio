import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core';
import api from '../../../api';

import { G_RECAPTA_TOKEN } from "../../../constant";

const HomeModalForm = ({ modalkey }) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [number, setnumber] = useState('');
    const [textmsg, settextmsg] = useState('');
    const [submitting, setsubmitting] = useState(false);
    const [submitted, setsubmitted] = useState(false);
    const [submitFailed, setsubmitFailed] = useState(false);
    const [buttonBackgroundColor, setbuttonBackgroundColor] = useState('#00ad45');

    const handleSubmit = (e) => {
        e.preventDefault();
        setsubmitting(true);
        setbuttonBackgroundColor('#dbdbdb');

        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(G_RECAPTA_TOKEN, { action: 'login' }).then((token) => {
                submitRequest(token);
            });
        });
    }

    const submitRequest = async (token) => {
        await api.post('/email', {
            git_name: name,
            git_email: email,
            git_mob: number,
            git_msg: textmsg,
            g_recap: token
        }).then((response) => {
            if (response.status === 200) {
                if (response.data.status === 'Y') {
                    setsubmitted(true);
                }
            }
        }).catch((e) => {
            console.error(e)
            setsubmitting(false);
            setbuttonBackgroundColor('#00ad45');
            setsubmitFailed(true);
        });
    }

    const renderForm = () => {
        return (
            <form style={{ paddingTop: '1rem', paddingBottom: '2rem' }} onSubmit={handleSubmit}>
                <TextField
                    required
                    fullWidth
                    id={`${modalkey}-name`}
                    label="Name"
                    margin="normal"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    type="email"
                    id={`${modalkey}-email`}
                    label="E-Mail"
                    margin="dense"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                <TextField
                    type="number"
                    id={`${modalkey}-mob`}
                    label="Mobile Number"
                    margin="dense"
                    value={number}
                    onChange={(e) => setnumber(e.target.value)}
                />
                <TextField
                    fullWidth
                    type="text"
                    id={`${modalkey}-msg`}
                    label="Any Message"
                    multiline
                    rowsMax={4}
                    margin="normal"
                    variant="outlined"
                    value={textmsg}
                    onChange={(e) => settextmsg(e.target.value)}
                />
                {submitFailed ? (
                    <Typography align="left" variant="body2" style={{ color: '#ff0000', float: 'left' }}>
                        Failed to store your data. <br />
                        Please, try again later
                    </Typography>
                ) : (<React.Fragment />)}

                <Button
                    type="submit"
                    style={{ backgroundColor: buttonBackgroundColor, color: '#ffffff', float: 'right' }}
                    disabled={submitting}
                >
                    {submitting ? <CircularProgress size={24} style={{ color: '#00ad45', top: '50%', left: '50%', }} /> : 'Submit'}

                </Button>
            </form>
        )

    }

    const renderSubmitted = () => {
        return (
            <Typography variant="body2" align="left" style={{ padding: '1rem' }}>
                Your Request is sumbmitted. <br />
                I'll reply you as soon as possible
            </Typography>
        )
    }

    if (submitted) {
        return (
            <React.Fragment>
                {renderSubmitted()}
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                {renderForm()}
            </React.Fragment>
        )
    }
}

export default HomeModalForm;