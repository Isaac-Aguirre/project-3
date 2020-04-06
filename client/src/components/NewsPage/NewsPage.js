import React, { useContext, useState, useEffect } from 'react'
import loggedContext from '../../utils/userContext';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';
import './NewsPage.css'

export default () => {
  const { user } = useContext(loggedContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.getHeadlines().then(data => { console.log(data); setNews(data.data) })
  }, [])

  return (
    // sidebar and navbar are going to be garentted on the screen
    // this div is going to be the space in the middle
    <div>
      <h1>Hollar News</h1>

      <div className='mt-5 d-flex flex-column' id='newsContScrollable'>
        {news.map(item => <div className="card mb-2 row">  
          <img src={item.urlToImage} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a href={item.url} className="btn btn-primary">Go To Original Article</a>
          </div>
        </div>)}
      </div>


    </div>
  )
}