const Sequelize = require('sequelize');

var db ='nodejs';
var user = 'root';
var pass = '';
var host = 'localhost'
var type = 'mysql'

const connector = new Sequelize(db,user,pass,{
    host:host,
    dialect:type
});

module.exports = connector;
