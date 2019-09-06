import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class Home extends React.Component {
    render() {
        return (
            <Container fixed >
                <Grid container justify="center" alignItems="center">
                    <Grid item >
                        Image
                    </Grid>
                </Grid>

                <Grid container spacing={1} justify="center" alignItems="center">
                    <Grid item xs>
                        1
                    </Grid>
                    <Grid item xs>
                        1
                    </Grid>
                    <Grid item xs>
                        1
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Home;