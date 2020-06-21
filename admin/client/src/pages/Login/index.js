import React from "react";
import {authLessApi} from "../../api";

const Login = () => {

    const [idState, setIdState] = React.useContext(null)
    const [passwordState, setPasswordState] = React.useContext(null)

    const formSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await authLessApi.post('/i/login',{id: idState, password: passwordState})
            if(res.status === 200) {
                console.log(res.data)
            }
            else {
                console.log(res.data)
            }
        }
        catch (e) {
            console.error(e);
        }

    }

    return (
        <React.Fragment>
            <form onSubmit={formSubmit}>
                <input type="text" name="id" onChange={(e) => {setIdState(e.target.value)}}/>
                <input type="password" name="password" onChange={(e => {setPasswordState(e.target.value)})}/>
                <button type={"submit"}>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Login;