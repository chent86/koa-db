const Sequelize = require('sequelize');

function defineGame(sequelize) {
    return sequelize.define('game', {
        gid: {
            type: Sequelize.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        },
        start_time: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        end_time: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        type: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        valid: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    },
    {underscored: true})   
}

module.exports = defineGame;