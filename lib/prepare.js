'use strict';

const Sequelize = require('sequelize');
const config = require("./config");
const sequelize = new Sequelize(config.db);
const defineUser = require('../modules/users');

var user = defineUser(sequelize);

// user.findAll({
// }).then(user => {
//     console.log(user)
//   })

module.exports = {
    sequelize
};