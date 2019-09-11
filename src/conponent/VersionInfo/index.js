import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import packageJson from './../../../package.json';

class VersionInfo extends React.Component {
    render() {
        const v = packageJson.version
        return (
            <Grid container justify="center">
                <Grid item lg={12}>
                    <Typography variant="body2" align="center">
                        {`Under Constraction | Beta ${v}`} 
                </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default VersionInfo;