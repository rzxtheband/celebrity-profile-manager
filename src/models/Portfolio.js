const sequelize = require('../config/db');
const {
    Model,
    DataTypes
} = require('sequelize');

class Portfolio extends Model {}
Portfolio.init({
    portfolio_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    manager_id: {
        type: DataTypes.INTEGER
    },
    celebrity_id: {
        type: DataTypes.INTEGER
    },
    project_id: {
        type: DataTypes.INTEGER
    },
    portfolio_url: {
        type: DataTypes.STRING(255)
    },
    description: {
        type: DataTypes.TEXT
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'portfolio',
    timestamps: false
});

module.exports = Portfolio;