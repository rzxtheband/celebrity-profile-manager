const express = require('express');
const router = express.Router();
const { Celebrity } = require('../models/ModelRegistry');

// Routes for Celebrities
router.get('/celebrities', async (req, res) => {
    try {
      const celebrities = await Celebrity.findAll();
      res.json(celebrities);
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  
router.get('/celebrities/:id', async (req, res) => {
    try {
      const celebrity = await Celebrity.findByPk(req.params.id);
      if (celebrity) {
        res.json(celebrity);
      } else {
        res.status(404).send('Celebrity not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  
router.post('/celebrities', async (req, res) => {
    try {
      const newCelebrity = await Celebrity.create(req.body);
      res.status(201).json(newCelebrity);
    } catch (error) {
      res.status(400).send(error.message);
    }
});
  
router.put('/celebrities/:id', async (req, res) => {
    try {
      const updated = await Celebrity.update(req.body, {
        where: { celebrity_id: req.params.id }
      });
      if (updated[0] > 0) {
        res.send('Celebrity profile updated successfully');
      } else {
        res.status(404).send('Celebrity not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
});
  
router.delete('/celebrities/:id', async (req, res) => {
    try {
      const deleted = await Celebrity.destroy({
        where: { celebrity_id: req.params.id }
      });
      if (deleted) {
        res.send('Celebrity profile deleted successfully');
      } else {
        res.status(404).send('Celebrity not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});

module.exports = router;
  