import React from 'react';
import { Grid, Typography } from '@material-ui/core';

class VersionInfo extends React.Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item lg={12}>
                    <Typography variant="body2" align="center">
                        Under Constraction | Beta 0.1.0
                </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default VersionInfo;