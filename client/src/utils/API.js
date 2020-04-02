const axios = require('axios');

export default {
    login: (data)=> axios.post('/api/login', data),
    signUp: (data)=> axios.post('/api/signup', data)
}