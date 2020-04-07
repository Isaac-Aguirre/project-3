
import React, { useContext, useState } from 'react'
import loggedContext from '../../utils/userContext';


export default () => {
    const { user } = useContext(loggedContext);
    console.log(user);
    return (
        <div>
            <Navbar />

            <div className="container mt-10">

        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="pic">
                        Image
                    </div>

                    
                </div>
                <div className="col">

                    <form className="form-inline">
                        <div className="form-group mb-2">
                          <label for="staticEmail2" className="sr-only">Email</label>
                          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="Input your Hollar"/>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                          <label for="inputPassword2" className="sr-only">Password</label>
                          <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Hollar</button>
                      </form>
                    
                      <div id="news" className="mt-10"></div>
                </div>
            </div>


        </div>

    </div>
        


        {/* // sidebar and navbar are going to be guarentted on the screen
        // this div is going to be the space in the middle */}
        
            {user ? <><h1>Welcome to Hollar {user}!</h1>
                <h1>YAY WE'RE IN!</h1></> : <Redirect to='/' />}
        </div>

            
        )

}

export default () => {
    const [filteredFollowers, setFilteredFollowers] = useState(followers)
    const [page, setPage] = useState('howls')
    const { user } = useContext(loggedContext);
    return (
        <>
        <NavBar setPage={setPage}/>
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

                        <div id="news" className= "container mt-5">
                            {page === 'news'? <NewsPage/> : <Howl/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}