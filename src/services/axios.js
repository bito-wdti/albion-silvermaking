const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: 'https://west.albion-online-data.com/api/v2/stats/prices/',
    headers: { 
        'content-type': 'application/x-www-form-urlencoded' 
    }
});

module.exports = instanciaAxios;