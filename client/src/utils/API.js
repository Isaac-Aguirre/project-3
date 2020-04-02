const axios = require('axios');

export default {
    login: (data)=> axios.post('/api/login', data)
}