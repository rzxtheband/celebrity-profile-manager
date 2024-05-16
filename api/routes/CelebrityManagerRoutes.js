const express = require('express');
const router = express.Router();
const { CelebrityManager } = require('../models/ModelRegistry');

// Routes for CelebrityManager
router.get('/celebritymanagers', async (req, res) => {
    try {
      const managers = await CelebrityManager.findAll();
      res.json(managers);
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  
router.get('/celebritymanagers/:id', async (req, res) => {
    try {
      const manager = await CelebrityManager.findByPk(req.params.id);
      if (manager) {
        res.json(manager);
      } else {
        res.status(404).send('Manager not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  
router.post('/celebritymanagers', async (req, res) => {
    try {
      const newManager = await CelebrityManager.create(req.body);
      res.status(201).json(newManager);
    } catch (error) {
      res.status(400).send(error.message);
    }
});
  
router.put('/celebritymanagers/:id', async (req, res) => {
    try {
      const updated = await CelebrityManager.update(req.body, {
        where: { manager_id: req.params.id }
      });
      if (updated) {
        res.send('Manager updated successfully');
      } else {
        res.status(404).send('Manager not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
});
  
router.delete('/celebritymanagers/:id', async (req, res) => {
    try {
      const deleted = await CelebrityManager.destroy({
        where: { manager_id: req.params.id }
      });
      if (deleted) {
        res.send('Manager deleted successfully');
      } else {
        res.status(404).send('Manager not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});

module.exports = router;