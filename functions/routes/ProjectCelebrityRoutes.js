const express = require('express');
const { ProjectCelebrity } = require('../models/ModelRegistry'); // Replace with your actual path to Sequelize models
const router = express.Router();

// Create a new project-celebrity association
router.post('/project-celebrities', async (req, res) => {
    try {
        const newAssociation = await ProjectCelebrity.create(req.body);
        res.status(201).json(newAssociation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// List all project-celebrity associations
router.get('/project-celebrities', async (req, res) => {
    try {
        const associations = await ProjectCelebrity.findAll();
        res.json(associations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve a specific association by project and celebrity ID
router.get('/project-celebrities/:project_id/:celebrity_id', async (req, res) => {
    try {
        const association = await ProjectCelebrity.findOne({
            where: {
                project_id: req.params.project_id,
                celebrity_id: req.params.celebrity_id
            }
        });
        if (association) {
            res.json(association);
        } else {
            res.status(404).json({ error: 'Association not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a specific association by project and celebrity ID
router.delete('/project-celebrities/:project_id/:celebrity_id', async (req, res) => {
    try {
        const deleted = await ProjectCelebrity.destroy({
            where: {
                project_id: req.params.project_id,
                celebrity_id: req.params.celebrity_id
            }
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
