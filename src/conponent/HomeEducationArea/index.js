import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Whatshot from '@material-ui/icons/Whatshot';
import School from '@material-ui/icons/School';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import wallpaper from './wallpaper.png';

class HomeEducationArea extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ebebeb' }}>
                <Grid container justify="center" style={{ paddingTop: '2rem' }}>
                    <Grid item lg={12}>
                        <Typography align="center" variant="h5" style={{ fontFamily: 'poppins-bold, sans-serif', color: '#00ad45' }}>
                            Education
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{ paddingTop: '1rem' }}>
                    <Grid item lg={12}>
                        <Typography align="center" variant="h4" style={{ fontFamily: 'poppins-bold, sans-serif', color: '#000000' }}>
                            More of my credentials:-
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justify="center" style={{paddingBottom: '2rem'}}>
                    <Grid item lg={12}>

                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2017 - present"
                                iconStyle={{ background: '#00ad45', color: '#ffffff' }}
                                icon={<School />}>

                                <Typography variant="h6">
                                    Bachelor Degree
                                </Typography>
                                <Typography variant="subtitle1">
                                    Government College of Engineering and Textile Technology, Berhampore
                                </Typography>
                                <Typography variant="body2">
                                    Bachelor of Technology - BTech Computer Science and Engineering <br />
                                    CGPA: 7.96 (At the end of 4 Semesters)
                                </Typography>

                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2009 - 2017"
                                iconStyle={{ background: '#00ad45', color: '#ffffff' }}
                                icon={<School />}>

                                <Typography variant="h6">
                                    High School &amp; Secondary
                                </Typography>
                                <Typography variant="subtitle1">
                                    Mankar High School, Mankar, WB, IN
                                </Typography>
                                <Typography variant="body2">
                                    Pure Science with Computer Science: 87% (WBCHSE) <br />
                                    Secondary : 85.5% (WBBSE)
                                </Typography>

                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                iconStyle={{ background: '#00ad45', color: '#fff' }}
                                icon={<Whatshot fontSize="large" />}
                            />

                        </VerticalTimeline>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default HomeEducationArea;