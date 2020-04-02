import React, { Component } from 'react';
//import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import LandingPage from './components/LandingPage/LandingPage';
//import Login from './components/Login/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const loggedContext = React.createContext();

function App() {
    return (
        <React.Fragment>
            <Navbar />
            
            <Router>
                <Route exact path="/">
                    <loggedContext.Provider value={{ isLogged: false }}>
                        <LandingPage />
                    </loggedContext.Provider>
                </Route>
            </Router>
            <Sidebar />
        </React.Fragment>
    )
}

export default App;
