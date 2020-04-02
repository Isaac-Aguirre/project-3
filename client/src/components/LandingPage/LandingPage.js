import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginRegister from '../Signup/LoginRegister';
import Login from '../Login/Login'
import loggedContext from '../../utils/userContext'


export default () => {
    return (
        <loggedContext.Consumer>
            {context => context.user ? <Redirect to="/home" />
                : <div className='row mt-5'>
                    <div className='col-md-6 col-xs-12'><Login logIn={true} /></div><div className='col-md-6 col-xs-12'><Login logIn={false} /></div>
                </div>
            }
        </loggedContext.Consumer>
    )
}


//<div className='row'>
// 