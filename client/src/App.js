import React, { useState, useEffect} from 'react';
//import './App.css';
import Navbar from './components/Navbar/Navbar';
//import Sidebar from './components/Sidebar/Sidebar';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage'
import NewsPage from './components/NewsPage/NewsPage'
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
    const [user, setUser] = useState({user:null});
    const [followers, setFollowers] = useState([])

    useEffect(()=>{
        if(user){
            navigator.geolocation.getCurrentPosition(
                position=> console.log(position)
            )
        }else{
            console.log()
        }
    },[user])

    const handleLogin =(data)=>{
        API.login(data).then(res=>{
            console.log(res);
            setUser(res.data);
            // API.getFollowers(res.data.id).then(response=> setFollowers(JSON.parse(response.data)))
        }).catch(err=>console.log(err))
    }


    return (
        <div className='container'>
            <Router>
                <Switch>

                     <loggedContext.Provider value={{...user, login: handleLogin}}>
                <Route exact path= '/news' component={NewsPage}/>

                <Route exact path='/home' component={HomePage}/>
                <Route exact path="/" component={LandingPage}/>
                </loggedContext.Provider>
                </Switch>
           
            </Router>
                </Switch>
        </div>
    )
}

export default App;
