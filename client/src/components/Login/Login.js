import React, {useContext, useState} from 'react';
import loggedContext from '../../utils/userContext'

export default function ({logIn}) {

    const {user, login, signUp} = useContext(loggedContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    return (

        <div>
            <form>
                {!logIn ? <div className="form-group">
                    <label>User Name</label>
                    <input onChange={(e)=>setUserName(e.target.value)} type="text" className="form-control" id="userName" aria-describedby="emailHelp" />
                </div> : ''}
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Remember Me</label>
                </div>
                <button onClick={(e)=>{e.preventDefault(); logIn ? login({email:email,password:password}) : 
                signUp({username: userName,email:email,password:password})}} className="btn btn-primary">{logIn ? "Log In" : "Sign Up" }</button>

            </form>
        </div>




    )
}