const Sequelize = require('sequelize');
const conn = require('../database/connector');

const Category = conn.define('categories',{
    title:{
         type: Sequelize.STRING,
         allowNull: false
    },slug:{
        type:Sequelize.STRING,
        allowNull: false
    }
});

//Category.sync({force:true})

module.exports = Category;