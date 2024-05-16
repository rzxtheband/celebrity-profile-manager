const sequelize = require('../config/db');
const {
    Model,
    DataTypes
} = require('sequelize');

class CelebrityManager extends Model {}
CelebrityManager.init({
    manager_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    phone_number: {
        type: DataTypes.STRING(20)
    },
    bio: {
        type: DataTypes.TEXT
    },
    profile_picture_url: {
        type: DataTypes.STRING(255)
    },
    website_url: {
        type: DataTypes.STRING(255)
    },
    address: {
        type: DataTypes.STRING(255)
    },
    city: {
        type: DataTypes.STRING(100)
    },
    state: {
        type: DataTypes.STRING(100)
    },
    country: {
        type: DataTypes.STRING(100)
    },
    zipcode: {
        type: DataTypes.STRING(20)
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
    modelName: 'celebrityManager',
    timestamps: false
});

module.exports = CelebrityManager;