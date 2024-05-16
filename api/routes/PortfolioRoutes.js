const express = require('express');
const { Portfolio } = require('../models/ModelRegistry'); // Replace with your actual path to Sequelize models
const router = express.Router();

// Create a new portfolio
router.post('/portfolios', async (req, res) => {
    try {
        const newPortfolio = await Portfolio.create(req.body);
        res.status(201).json(newPortfolio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// List all portfolios
router.get('/portfolios', async (req, res) => {
    try {
        const portfolios = await Portfolio.findAll();
        res.json(portfolios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve a specific portfolio by ID
router.get('/portfolios/:portfolio_id', async (req, res) => {
    try {
        const portfolio = await Portfolio.findByPk(req.params.portfolio_id);
        if (portfolio) {
            res.json(portfolio);
        } else {
            res.status(404).json({ error: 'Portfolio not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a specific portfolio by ID
router.put('/portfolios/:portfolio_id', async (req, res) => {
    try {
        const updated = await Portfolio.update(req.body, {
            where: { portfolio_id: req.params.portfolio_id }
        });
        if (updated) {
            const updatedPortfolio = await Portfolio.findByPk(req.params.portfolio_id);
            res.json(updatedPortfolio);
        } else {
            res.status(404).json({ error: 'Portfolio not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a specific portfolio by ID
router.delete('/portfolios/:portfolio_id', async (req, res) => {
    try {
        const deleted = await Portfolio.destroy({
            where: { portfolio_id: req.params.portfolio_id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Portfolio not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
