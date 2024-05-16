const express = require('express');
const router = express.Router();
const { Project } = require('../models/ModelRegistry');

// Routes for Projects
router.get('/projects', async (req, res) => {
    try {
      const projects = await Project.findAll();
      res.json(projects);
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  
router.get('/projects/:id', async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id);
      if (project) {
        res.json(project);
      } else {
        res.status(404).send('Project not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  
router.post('/projects', async (req, res) => {
    try {
      const newProject = await Project.create(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(400).send(error.message);
    }
});
  
router.put('/projects/:id', async (req, res) => {
    try {
      const updated = await Project.update(req.body, {
        where: { project_id: req.params.id }
      });
      if (updated[0] > 0) {
        res.send('Project updated successfully');
      } else {
        res.status(404).send('Project not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
});
  
router.delete('/projects/:id', async (req, res) => {
    try {
      const deleted = await Project.destroy({
        where: { project_id: req.params.id }
      });
      if (deleted) {
        res.send('Project deleted successfully');
      } else {
        res.status(404).send('Project not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  
module.exports = router;