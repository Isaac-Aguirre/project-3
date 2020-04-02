import React from 'react';
import {Redirect} from 'react-router-dom';
import LoginRegister from '../Signup/LoginRegister';
import Login from '../Login/Login'
import loggedContext from '../../utils/userContext'


export default ()=> {
        return(
            <loggedContext.Consumer>
                {context=> context.user ? <Redirect to="/home"/>
                    : <Login />
                }
            </loggedContext.Consumer>
        )
}
