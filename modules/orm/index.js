'use strict';

let Sequelize = require('sequelize');
let mysql2 = require('mysql2');

let db_mode = process.env.NODE_ENV || 'dev';
let env = require('./env.json')[db_mode];
let db = {};

console.log(' ## db init ### ');
let connection = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    logging: true, 
    dialect: env.dialect,
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 20000,
        idle: 10000
    }
});
 
const modelDefiners = [
	require('./models/customer_info')
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(connection);
}

//connection.sync();

module.exports = connection;
