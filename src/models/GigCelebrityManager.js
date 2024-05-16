const sequelize = require('../config/db');
const {
    Model,
    DataTypes
} = require('sequelize');

class GigCelebrityManager extends Model {}
GigCelebrityManager.init({
    gig_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    manager_id: {
        type: DataTypes.INTEGER
    },
    bid_amount: {
        type: DataTypes.DECIMAL(10, 2)
    },
    status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending'
    },
    message: {
        type: DataTypes.TEXT
    },
    proposal: {
        type: DataTypes.JSON
    },
    notes: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'gigCelebrityManager',
    timestamps: false
});

module.exports = GigCelebrityManager;