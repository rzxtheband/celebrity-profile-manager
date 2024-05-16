const sequelize = require('../config/db');
const {
    Model,
    DataTypes
} = require('sequelize');

class Project extends Model {}
Project.init({
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.ENUM('event', 'gig', 'film'),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    date: {
        type: DataTypes.DATEONLY
    },
    start_time: {
        type: DataTypes.TIME
    },
    end_time: {
        type: DataTypes.TIME
    },
    timezone: {
        type: DataTypes.STRING(50)
    },
    venue: {
        type: DataTypes.STRING(255)
    },
    organizer: {
        type: DataTypes.STRING(100)
    },
    registration_url: {
        type: DataTypes.STRING(255)
    },
    max_attendees: {
        type: DataTypes.INTEGER
    },
    min_age_requirement: {
        type: DataTypes.INTEGER
    },
    ticket_price: {
        type: DataTypes.DECIMAL(10, 2)
    },
    production_budget: {
        type: DataTypes.DECIMAL(15, 2)
    },
    profit_sharing_percentage: {
        type: DataTypes.DECIMAL(5, 2)
    },
    tags: {
        type: DataTypes.JSON
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'project',
    timestamps: false
});

module.exports = Project;