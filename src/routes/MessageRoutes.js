const express = require('express');
const { Message } = require('../models/ModelRegistry'); // Replace with your actual path to Sequelize models
const router = express.Router();

// Send a new message
router.post('/messages', async (req, res) => {
    try {
        const newMessage = await Message.create(req.body);
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// List all messages
router.get('/messages', async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve a specific message by ID
router.get('/messages/:message_id', async (req, res) => {
    try {
        const message = await Message.findByPk(req.params.message_id);
        if (message) {
            res.json(message);
        } else {
            res.status(404).json({ error: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a specific message by ID (e.g., mark as read)
router.put('/messages/:message_id', async (req, res) => {
    try {
        const updated = await Message.update(req.body, {
            where: { message_id: req.params.message_id }
        });
        if (updated) {
            const updatedMessage = await Message.findByPk(req.params.message_id);
            res.json(updatedMessage);
        } else {
            res.status(404).json({ error: 'Message not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a specific message by ID
router.delete('/messages/:message_id', async (req, res) => {
    try {
        const deleted = await Message.destroy({
            where: { message_id: req.params.message_id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
