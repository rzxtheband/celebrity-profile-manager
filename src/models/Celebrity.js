const sequelize = require('../config/db');
const {
    Model,
    DataTypes
} = require('sequelize');

class Celebrity extends Model {}
Celebrity.init({
    celebrity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    stage_name: {
        type: DataTypes.STRING(100)
    },
    bio: {
        type: DataTypes.TEXT
    },
    skills_and_talents: {
        type: DataTypes.TEXT
    },
    performances: {
        type: DataTypes.TEXT
    },
    physique: {
        type: DataTypes.TEXT
    },
    photo_gallery: {
        type: DataTypes.JSON
    },
    birthdate: {
        type: DataTypes.DATEONLY
    },
    nationality: {
        type: DataTypes.STRING(100)
    },
    height: {
        type: DataTypes.DECIMAL(5, 2)
    },
    weight: {
        type: DataTypes.DECIMAL(5, 2)
    },
    eye_color: {
        type: DataTypes.STRING(50)
    },
    hair_color: {
        type: DataTypes.STRING(50)
    },
    social_media_links: {
        type: DataTypes.JSON
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'celebrity',
    timestamps: false
});

module.exports = Celebrity;