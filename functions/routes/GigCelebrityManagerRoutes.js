const express = require('express');
const { GigCelebrityManager } = require('../models/ModelRegistry'); // Assuming models are exported from 'models.js'
const router = express.Router();

// Create a new gig-celebrity-manager association
router.post('/gig-celebrity-managers', async (req, res) => {
    try {
        const newAssociation = await GigCelebrityManager.create(req.body);
        res.status(201).json(newAssociation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// List all gig-celebrity-manager associations
router.get('/gig-celebrity-managers', async (req, res) => {
    try {
        const associations = await GigCelebrityManager.findAll();
        res.json(associations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve a specific association by gig ID
router.get('/gig-celebrity-managers/:gig_id', async (req, res) => {
    try {
        const association = await GigCelebrityManager.findByPk(req.params.gig_id);
        if (association) {
            res.json(association);
        } else {
            res.status(404).json({ error: 'Association not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a specific association by gig ID
router.put('/gig-celebrity-managers/:gig_id', async (req, res) => {
    try {
        const updated = await GigCelebrityManager.update(req.body, {
            where: { gig_id: req.params.gig_id }
        });
        if (updated) {
            const updatedAssociation = await GigCelebrityManager.findByPk(req.params.gig_id);
            res.json(updatedAssociation);
        } else {
            res.status(404).json({ error: 'Association not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a specific association by gig ID
router.delete('/gig-celebrity-managers/:gig_id', async (req, res) => {
    try {
        const deleted = await GigCelebrityManager.destroy({
            where: { gig_id: req.params.gig_id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Association not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
