const Sequelize = require('sequelize');

function defineUser(sequelize) {
    return sequelize.define('user', {
        uid: {
            type: Sequelize.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(50),
            defaultValue: ''
        },
        birthday: {
            type: Sequelize.STRING(10),
            defaultValue: ''
        },
        free_time_1: {
            type: Sequelize.STRING(5),
            defaultValue: ''
        },
        free_time_2: {
            type: Sequelize.STRING(10),
            defaultValue: ''
        }
    })   
}

module.exports = defineUser;