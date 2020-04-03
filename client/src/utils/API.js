const axios = require('axios');

export default {
    login: (data)=> axios.post('/data/login', data),
    signUp: (data)=> axios.post('/data/signup', data),
    getHeadlines: ()=> axios.get('/api/news')
}