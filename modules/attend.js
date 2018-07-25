const Sequelize = require('sequelize');

function defineAttend(sequelize) {
    return sequelize.define('attend', {
        id: {
            type: Sequelize.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        },
        role: {
            type: Sequelize.STRING(10),
            allowNull: false
        }
    },
    {underscored: true})   
}

module.exports = defineAttend;