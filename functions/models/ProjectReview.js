const sequelize = require('../config/db');
const {
    Model,
    DataTypes
} = require('sequelize');

class ProjectReview extends Model {}
ProjectReview.init({
    review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    project_id: {
        type: DataTypes.INTEGER
    },
    manager_id: {
        type: DataTypes.INTEGER
    },
    rating: {
        type: DataTypes.DECIMAL(3, 2)
    },
    review_text: {
        type: DataTypes.TEXT
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'projectReview',
    timestamps: false
});

module.exports = ProjectReview;