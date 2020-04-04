
import React, { useContext, useState } from 'react'
import loggedContext from '../../utils/userContext';
import { Redirect } from 'react-router-dom';
import NewsPage from '../NewsPage/NewsPage'
import Navbar from '../Navbar/Navbar';
import './HomePage.css';

const followers = ['Sadiq', 'Vegeta', 'Buu', 'Trunks', 'Gohan'];

const Follower =({name})=>{
    return <div className='follower btn btn-danger'>{name}</div>
}

export default () => {
    const [filteredFollowers, setFilteredFollowers] = useState(followers)

    const { user } = useContext(loggedContext);
    return (
        <>
            <Navbar />

            <div className="container mt-3">
                <div className="row">
                    <div className="col-2">
                        <div className='row'>
                            <img id="pic" src='https://vignette.wikia.nocookie.net/dragonuniverse/images/a/a4/MigattenoGokuiPerfectHeroes.png/revision/latest?cb=20180303025918' className='img-fluid'/>
                        </div>
                        <input id='searchUser' placeholder='Search' onChange={e=> setFilteredFollowers(followers.filter(follower=> follower.toLowerCase().includes(e.target.value)))}/>
                        <div className='row' id='followers'>
                            {filteredFollowers.map(follower=> <Follower name={follower}/>)}
                        </div>
                    </div>
                    <div id='newsBlock' className="col-9">
                        <div className='row'>
                            <input id='hollarInput' placeholder='Hollar at your boy'/>
                            <button id='submitHollar' className='btn btn-secondary'>Hollar</button>
                        </div>

                        <div id="news" className="mt-5 row">
                            <NewsPage/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}