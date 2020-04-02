import React, { Component } from 'react'
import HomePage from '../HomePage/HomePage';
import LoginRegister from '../Signup/LoginRegister'
import {loggedContext} from '../../App'


export default class LandingPage extends Component {
    render() {
        return(
            <loggedContext.Consumer>
                {(context) => {
                    console.log(context)
                    if(context.isLogged === true){
                       return  <HomePage />
                    }
                    return <LoginRegister />
                }}
            </loggedContext.Consumer>
        )
    }
}
