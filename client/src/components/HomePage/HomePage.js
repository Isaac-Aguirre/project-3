
import React, { useContext, useState } from 'react'
import loggedContext from '../../utils/userContext';
import NavBar from '../Navbar/Navbar';
import NewsPage from '../NewsPage/NewsPage'
import Howl from '../Howl/Howl'


export default () => {
    const [filteredFollowers, setFilteredFollowers] = useState(followers)
    const [page, setPage] = useState('howls')
    const { user } = useContext(loggedContext);
    const followers = 86;

    return (
        <>
        <NavBar setPage={setPage}/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-2">
                        <div className='row'>
                            <img id="pic" src='https://vignette.wikia.nocookie.net/dragonuniverse/images/a/a4/MigattenoGokuiPerfectHeroes.png/revision/latest?cb=20180303025918' className='img-fluid'/>
                        </div>
                        {/* <input id='searchUser' placeholder='Search' onChange={e=> setFilteredFollowers(followers.filter(follower=> follower.toLowerCase().includes(e.target.value)))}/>
                        <div className='row' id='followers'>
                            {filteredFollowers.map(follower=> <Follower name={follower}/>)}
                        </div> */}
                    </div>
                    <div id='newsBlock' className="col-9">
                        <div className='row'>
                            <input id='hollarInput' placeholder='Hollar at your boy'/>
                            <button id='submitHollar' className='btn btn-secondary'>Hollar</button>
                        </div>
                        <div id="news" className= "container mt-5">
                            {page === 'news'? <NewsPage/> : <Howl/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}