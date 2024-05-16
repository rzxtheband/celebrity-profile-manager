const sequelize = require('../config/db');
const {
    Model,
    DataTypes
} = require('sequelize');

class Message extends Model {}
Message.init({
    message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sender_id: {
        type: DataTypes.INTEGER
    },
    receiver_id: {
        type: DataTypes.INTEGER
    },
    message_text: {
        type: DataTypes.TEXT
    },
    sent_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    is_archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'message',
    timestamps: false
});

module.exports = Message;