'use strict';

const Sequelize = require('sequelize');
const config = require("./config");

const sequelize = new Sequelize(config.db);

var game = sequelize.define('game', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,},
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: ''
    },
    nickname: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: ''
    }
});

var court = sequelize.define('court', {
    location: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: ''
    }
});

game.hasMany(court);

// game.findAll({
//     include: game.courts
// }).then(game => {
//     console.log(game)
//   })

module.exports = {
    sequelize,
};