const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : 'helloworld78',
      database : 'albion_silvermaking'
    }
});

module.exports = knex;