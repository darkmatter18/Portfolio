import React from 'react';
import './index.css';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class Page404 extends React.Component {
    state = { digit1: null, digit2: null, digit3: null };

    randomNum() {
        return Math.floor(9 * Math.random()) + 1
    };

    onBackButtonClick = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        let loop1, loop2, loop3, time = 30, i = 0;

        loop3 = setInterval(() => {
            if (40 < i) {
                clearInterval(loop3);
                this.setState({ digit3: 4 });
            }
            else {
                this.setState({ digit3: this.randomNum() });
                i++;
            }
        }, time);

        loop2 = setInterval(() => {
            if (80 < i) {
                clearInterval(loop2);
                this.setState({ digit2: 0 });
            }
            else {
                this.setState({ digit2: this.randomNum() });
                i++;
            }
        }, time);

        loop1 = setInterval(() => {
            if (100 < i) {
                clearInterval(loop1);
                this.setState({ digit1: 4 });
            }
            else {
                this.setState({ digit1: this.randomNum() });
                i++;
            }
        }, time);
    }

    render() {
        const { digit1, digit2, digit3 } = this.state;

        return (
            <div className="error">
                <div className="container-floud">
                    <div className="col-xs-12 text-center">
                        <div className="container-error-404">
                            <div className="clip">
                                <div className="shadow"><span className="digit thirdDigit">{digit3}</span></div>
                            </div>
                            <div className="clip">
                                <div className="shadow"><span className="digit secondDigit">{digit2}</span></div>
                            </div>
                            <div className="clip">
                                <div className="shadow"><span className="digit firstDigit">{digit1}</span></div>
                            </div>
                            <div className="msg">OH!<span className="triangle"></span></div>
                        </div>
                        <h2 className="h1">Sorry! Page not found</h2>
                        <Button variant="outlined" size="large" onClick={this.onBackButtonClick}>
                            Back TO home
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Page404);