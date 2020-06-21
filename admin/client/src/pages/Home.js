import React from "react";
import {useHistory} from "react-router-dom";
import {DASHBOARD, LOGIN} from "../routes";

const Home = () => {
    const history = useHistory();
    const is_login = false;
    if (is_login) {
        history.push(DASHBOARD);
    } else {
        history.push(LOGIN);
    }
    return <React.Fragment />
}

export default Home;