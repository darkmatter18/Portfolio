import React from "react";
import {useHistory} from "react-router-dom";
import {DASHBOARD, LOGIN} from "../routes";
import {isAuth}  from "jwt-auth-react";

const Home = () => {
    const history = useHistory();
    const is_login = isAuth().auth;
    if (is_login) {
        history.push(DASHBOARD);
    } else {
        history.push(LOGIN);
    }
    return <React.Fragment />
}

export default Home;