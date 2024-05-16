const sequelize = require('../config/db');
const {
    Model,
    DataTypes
} = require('sequelize');

class ProjectCelebrity extends Model {}
ProjectCelebrity.init({
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    celebrity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'projectCelebrity',
    timestamps: false
});

module.exports = ProjectCelebrity;