import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="Register Card">
                        <h1>Register</h1>
                        <forum>
                            <label for="uname">User name:</label>
                            <input type="text" id="uname" name="uname"></input> <br />
                            <label for="fname">First name:</label>
                            <input type="text" id="fname" name="fname"></input>
                            <label for="lname">Last name:</label>
                            <input type="text" id="lname" name="lname"></input> <br />
                            <label for="email">Email:</label>
                            <input type="text" id="email" name="email"></input> <br />
                            <label for="password">Password:</label>
                            <input type="text" id="password" name="password"></input> <br />
                            <label for="passwordCheck">Re-enter password:</label>
                            <input type="text" id="passwordCheck" name="passwordCheck"></input> <br />
                            <input type="submit" value="submit"></input>
                        </forum>
                    </div>


                    <div id="Login Card">
                        <h1> Login </h1>
                        <forum>
                            <label for="uname">User name:</label>
                            <input type="text" id="uname" name="uname"></input> <br />
                            <label for="password">Password:</label>
                            <input type="text" id="password" name="password"></input> <br />
                            <input type="submit" value="submit"></input>
                        </forum>
                    </div>
                    <hr />

                </div>

            </div>
        )
    }
}
