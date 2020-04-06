const axios = require('axios');

export default {
    login: (data)=> axios.post('/user/login', data),
    signUp: (data)=> axios.post('/data/signup', data),
    getHeadlines: ()=> axios.get('/api/news')
}