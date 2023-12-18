const express = require('express');
const { consultarPrecos } = require('./controladores/prices');
// const axios = require('axios'); 

const rotas = express();

rotas.use(express.json());

rotas.get('/price', consultarPrecos);

// rotas.get('/teste-view', async (req, res) => {

//     const { item } = req.body;

//     const instanciaAxios = axios.create({
//         baseURL: 'https://west.albion-online-data.com/api/v2/stats/view/',
//         headers: { 
//             'content-type': 'application/x-www-form-urlencoded' 
//         }
//     });

//     try {

//         const resultado = await instanciaAxios.get(`${item}`);
        
//         return res.status(200).json(resultado.data);
//     } catch (error) {
        
//         return res.status(500).json(error.data);
//     }   
// });

module.exports = rotas;