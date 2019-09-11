import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import axios from 'axios';

class HomeModalForm extends React.Component {

    state = { name: '', email: '', number: '', textmsg: '', submitting: false, submitted: false, buttonBackgroundColor: '#00ad45' }

    handleChange = name => e => {
        e.preventDefault();
        this.setState({ ...this.state, [name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitting: true, buttonBackgroundColor: '#dbdbdb' })
        this.submitRequest()
    }

    submitRequest = async () => {
        const response = await axios.post('http://www.google.com', {
            git_name: this.state.name,
            git_email: this.state.email,
            git_mob: this.state.number,
            git_msg: this.state.textmsg
        });

        if (response.status === 200) {
            if (response.data.status === 'Y') {
                this.setState({ submitted: true })
            }
        }
        
    }

    renderForm() {
        const { name, email, number, textmsg, submitting, buttonBackgroundColor } = this.state
        return (
            <form style={{ paddingTop: '1rem', paddingBottom: '2rem' }} onSubmit={this.handleSubmit}>
                <TextField
                    required
                    fullWidth
                    id="git-name"
                    label="Name"
                    margin="normal"
                    name="git-name"
                    value={name}
                    onChange={this.handleChange('name')}
                />
                <TextField
                    required
                    fullWidth
                    type="email"
                    id="git-email"
                    label="E-Mail"
                    margin="dense"
                    name="git-email"
                    value={email}
                    onChange={this.handleChange('email')}
                />
                <TextField
                    type="number"
                    id="git-email"
                    label="Mobile Number"
                    margin="dense"
                    name="git-mob"
                    value={number}
                    onChange={this.handleChange('number')}
                />
                <TextField
                    fullWidth
                    type="text"
                    id="git-msg"
                    label="Any Message"
                    multiline
                    rowsMax={4}
                    margin="normal"
                    variant="outlined"
                    value={textmsg}
                    onChange={this.handleChange('textmsg')}
                />

                <Button
                    type="submit"
                    style={{ backgroundColor: buttonBackgroundColor, color: '#ffffff', float: 'right' }}
                    disabled={submitting}
                >
                    Submit
                </Button>
            </form>
        )
    }

    renderSubmitted() {
        return (
            <Typography variant="body2" align="left" style={{ padding: '1rem' }}>
                Your Request is sumbmitted. <br />
                I'll reply you as soon as possible
            </Typography>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.state.submitted ? (
                    this.renderSubmitted()
                ) : (
                        this.renderForm()
                    )}
            </React.Fragment>
        )
    }
}

export default HomeModalForm;