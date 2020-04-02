import React, { useState} from 'react';
//import './App.css';
import Navbar from './components/Navbar/Navbar';
//import Sidebar from './components/Sidebar/Sidebar';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import API from './utils/API';
import loggedContext from './utils/userContext';

function App() {
    const [user, setUser] = useState({user:null})

    const handleLogin =(data)=>{
        API.login(data).then(res=>{
            console.log(res);
            setUser(res.data)
        }).catch(err=>console.log(err))
    }

    const handleSignup =(data)=>{
        API.signUp(data).then(res=>{

        })
    }

    return (
        <div className='container'>
            <Router>
            <loggedContext.Provider value={{...user, login: handleLogin, signUp: handleSignup}}>
            <Navbar />
                <Route exact path='/home' component={HomePage}/>
                <Route exact path="/" component={LandingPage}/>
                </loggedContext.Provider>
            </Router>
        </div>
    )
}

export default App;
