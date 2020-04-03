import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import LoginRegister from '../Signup/LoginRegister';
import Login from '../Login/Login'
import loggedContext from '../../utils/userContext'


export default () => {
    const [logIn, setLogIn] = useState(true)
    return (
        <loggedContext.Consumer>
            {context => context.user ? <Redirect to="/home" />
                : <div className='row mt-5'>
                    <div className='col-12 card'><Login logIn={logIn} setLogIn={setLogIn} /></div>
                </div>
            }
        </loggedContext.Consumer>
    )
}


//<div className='row'>
// 