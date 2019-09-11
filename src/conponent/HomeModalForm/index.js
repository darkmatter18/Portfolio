import React from 'react';
import { TextField, Button } from '@material-ui/core';

class HomeModalForm extends React.Component {

    state ={name: '', email: '', number: '', textmsg: ''}

    handleChange = name => e => {
        e.preventDefault();
        this.setState({...this.state ,[name]: e.target.value})
    }

    render() {

        const {name, email, number, textmsg} = this.state

        return (
            <form style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                <TextField
                    required
                    fullWidth
                    id="git-name"
                    label="Name"
                    margin="normal"
                    name="git-name"
                    value={name}
                    onChange = {this.handleChange('name')}
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
                    onChange = {this.handleChange('email')}
                />
                <TextField
                    type="number"
                    id="git-email"
                    label="Mobile Number"
                    margin="dense"
                    name="git-mob"
                    value={number}
                    onChange = {this.handleChange('number')}
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
                    onChange = {this.handleChange('textmsg')}
                />

                <Button
                    type="submit"
                    style={{backgroundColor: '#00ad45', color: '#ffffff', float: 'right'}}
                >
                    Submit
                </Button>
            </form>
        )
    }
}

export default HomeModalForm;