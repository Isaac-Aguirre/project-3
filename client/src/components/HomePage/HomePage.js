import React, { useContext } from 'react'
import loggedContext from '../../utils/userContext';
import {Redirect} from 'react-router-dom';

export default ()=> {
    const {user} = useContext(loggedContext);
    console.log(user);
        return (
            // sidebar and navbar are going to be garentted on the screen
            // this div is going to be the space in the middle
            <div>
                {user ? <><h1>Welcome to Hollar {user}!</h1>
                <h1>YAY WE'RE IN!</h1></> : <Redirect to='/'/>}
            </div>
        )
}
