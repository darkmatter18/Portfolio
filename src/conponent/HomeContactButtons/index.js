import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ArrowDownwardRounded from '@material-ui/icons/ArrowDownwardRounded';

class HomeContactButtons extends React.Component {
    render() {
        return (
            <Grid container spacing={5} justify="center" style={{ paddingBottom: '3rem' }}>
                <Grid item>
                    <Button>
                        Get in Touch
                    </Button>
                </Grid>
                <Grid item>
                    <Button >
                        <ArrowDownwardRounded />
                        Resume
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default HomeContactButtons;