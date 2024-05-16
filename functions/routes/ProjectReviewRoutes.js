const express = require('express');
const { ProjectReview } = require('../models/ModelRegistry'); // Replace with your actual path to Sequelize models
const router = express.Router();

// Create a new project review
router.post('/project-reviews', async (req, res) => {
    try {
        const newReview = await ProjectReview.create(req.body);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// List all project reviews
router.get('/project-reviews', async (req, res) => {
    try {
        const reviews = await ProjectReview.findAll();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve a specific project review by ID
router.get('/project-reviews/:review_id', async (req, res) => {
    try {
        const review = await ProjectReview.findByPk(req.params.review_id);
        if (review) {
            res.json(review);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a specific project review by ID
router.put('/project-reviews/:review_id', async (req, res) => {
    try {
        const updated = await ProjectReview.update(req.body, {
            where: { review_id: req.params.review_id }
        });
        if (updated) {
            const updatedReview = await ProjectReview.findByPk(req.params.review_id);
            res.json(updatedReview);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a specific project review by ID
router.delete('/project-reviews/:review_id', async (req, res) => {
    try {
        const deleted = await ProjectReview.destroy({
            where: { review_id: req.params.review_id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
