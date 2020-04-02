import React, {useContext, useState} from 'react';
import loggedContext from '../../utils/userContext'

export default function () {

    const {user, login} = useContext(loggedContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div>
            <form>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button onClick={(e)=>{e.preventDefault(); login({email:email,password:password})}} class="btn btn-primary">Submit</button>

            </form>
        </div>




    )
}