const { Sequelize } = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
//     host: process.env.DATABASE_HOST,
//     dialect: process.env.DATABASE_DIALECT
// });

const sequelize = new Sequelize('u832555779_profile_app', 'u832555779_profile_admin', 'ProfileAdmin@123', {
    host: 'srv922.hstgr.io',
    dialect: 'mysql'
});

module.exports = sequelize;