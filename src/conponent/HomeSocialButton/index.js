import React from 'react';

class HomeSocialButton extends React.Component {
    state = { color: '#ffffff', shadow: '0', c: 'context-menu' };
    //{color: '#00ad45', textShadow: '0px 0px 10px #00ad45'}

    mouseOver() {
        this.setState({ color: '#00ad45', shadow: '0px 0px 10px #00ad45', c: 'pointer' })
    }

    mouseOut() {
        this.setState({ color: '#ffffff', shadow: '0 0 0', c: 'context-menu' });
    }

    onClickHandler = (e) => {
        const { link } = this.props;
        e.preventDefault();

        if(link) {
            console.log('Opening Link:  '+ link);
            if(link.startsWith('#')){
                window.location = link
            }
            if(link.startsWith('http')){
                window.open(link);
            }
        }
        else {
            console.log('NO LINK PRESENT');
        }
    }

    render() {

        const { color, shadow, c } = this.state
        const s = { color: color, textShadow: shadow, cursor: c }
        const { iName } = this.props
        const iconV = `${iName} fa-2x`;

        return (
            <React.Fragment>
                <i className={iconV} style={s} onMouseEnter={() => this.mouseOver()} onMouseLeave={() => this.mouseOut()} onClick={this.onClickHandler}></i>
            </React.Fragment>
        )
    }
}

export default HomeSocialButton;