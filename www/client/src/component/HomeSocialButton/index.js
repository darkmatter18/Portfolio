import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import {ReactComponent as ChevronDown} from './chevrondown.svg';
import {ReactComponent as Facebook} from './facebook.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';
import {ReactComponent as Github} from './github.svg';
import {ReactComponent as Instagram} from './instagram.svg';
import {ReactComponent as Twitter} from './twitter.svg';


const useThemes = makeStyles(() => ({
    svg: {
        textAlign: 'center',
        height: '2em',
        width: '2em',
        display: 'block',
        margin: 'auto'
    }
}));

const HomeSocialButton = ({iName, link}) => {
    const classes = useThemes();

    const [style, setStyle] = React.useState({color: '#ffffff', textShadow: '0 0 0', cursor: 'context-menu'})

    const Logo = () => {
        switch (iName) {
            case 'Facebook':
                return (
                    <React.Fragment>
                        <Facebook className={classes.svg}/>
                    </React.Fragment>
                )
            case 'Linkedin':
                return (
                    <React.Fragment>
                        <Linkedin className={classes.svg}/>
                    </React.Fragment>
                )
            case 'Github':
                return (
                    <React.Fragment>
                        <Github className={classes.svg}/>
                    </React.Fragment>
                )
            case 'Instagram':
                return (
                    <React.Fragment>
                        <Instagram className={classes.svg}/>
                    </React.Fragment>
                )
            case 'Twitter':
                return (
                    <React.Fragment>
                        <Twitter className={classes.svg}/>
                    </React.Fragment>
                )
            case 'ChevronDown':
                return (
                    <React.Fragment>
                        <ChevronDown className={classes.svg}/>
                    </React.Fragment>
                )
            default:
                return <React.Fragment/>
        }
    };

    const onClickHandler = (e) => {
        e.preventDefault();

        if (link) {
            console.log('Opening Link:  ' + link);
            if (link.startsWith('#')) {
                window.location = link
            }
            if (link.startsWith('http')) {
                window.open(link);
            }
        } else {
            console.log('NO LINK PRESENT');
        }
    }

    return (
        <div className={classes.icon} style={style}
           onMouseEnter={() => {
               setStyle({color: '#00ad45', textShadow: '0px 0px 20px #00ad45', cursor: 'pointer'})
           }}
           onMouseLeave={() => {
               setStyle({color: '#ffffff', textShadow: '0 0 0', cursor: 'context-menu'})
           }}
           onClick={onClickHandler}>
            {Logo()}
        </div>
    )
}

export default HomeSocialButton;