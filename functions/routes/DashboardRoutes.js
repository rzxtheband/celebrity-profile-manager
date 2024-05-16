const express = require('express');
const { CelebrityManager, Celebrity, Project, GigCelebrityManager } = require('../models/ModelRegistry'); // Replace with your actual path to Sequelize models
const router = express.Router();

// Get insights about managers
router.get('/dashboard/manager-insights', async (req, res) => {
    try {
        const totalManagers = await CelebrityManager.count();
        const recentSignUps = await CelebrityManager.findAll({
            limit: 5,
            order: [['created_at', 'DESC']]
        });
        res.json({ totalManagers, recentSignUps });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get insights about celebrities
router.get('/dashboard/celebrity-insights', async (req, res) => {
    try {
        const totalCelebrities = await Celebrity.count();
        const recentActivities = await ProjectCelebrity.findAll({
            limit: 5,
            order: [['created_at', 'DESC']],
            include: [{ model: Celebrity }, { model: Project }]
        });
        res.json({ totalCelebrities, recentActivities });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get insights about projects
router.get('/dashboard/project-insights', async (req, res) => {
    try {
        const totalProjects = await Project.count();
        const upcomingProjects = await Project.findAll({
            where: { date: { [Sequelize.Op.gt]: new Date() } },
            limit: 5,
            order: [['date', 'ASC']]
        });
        res.json({ totalProjects, upcomingProjects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get financial insights
router.get('/dashboard/revenue-insights', async (req, res) => {
    try {
        const totalRevenue = await GigCelebrityManager.sum('bid_amount');
        const profitSharing = await GigCelebrityManager.findAll({
            attributes: ['manager_id', [Sequelize.fn('SUM', Sequelize.col('bid_amount')), 'totalBidAmount']],
            group: ['manager_id'],
            order: [[Sequelize.fn('SUM', Sequelize.col('bid_amount')), 'DESC']],
            limit: 5
        });
        res.json({ totalRevenue, profitSharing });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
