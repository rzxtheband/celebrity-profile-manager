const express = require('express');
const app = express();
const sequelize = require('./config/db');
const bodyParser = require('body-parser');
require('./models/ModelRegistry');

// Importing routers
const celebrityManagerRouter = require('./routes/CelebrityManagerRoutes'); // Replace with your actual path
const celebrityRouter = require('./routes/CelebrityRoutes'); // Replace with your actual path
const projectRouter = require('./routes/ProjectRoutes'); // Replace with your actual path
const gigCelebrityManagerRouter = require('./routes/GigCelebrityManagerRoutes'); // Replace with your actual path
const projectCelebrityRouter = require('./routes/ProjectCelebrityRoutes'); // Replace with your actual path
const portfolioRouter = require('./routes/PortfolioRoutes'); // Replace with your actual path
const projectReviewRouter = require('./routes/ProjectReviewRoutes'); // Replace with your actual path
const messageRouter = require('./routes/MessageRoutes'); // Replace with your actual path
const dashboardRouter = require('./routes/DashboardRoutes'); // Replace with your actual path

// Middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mounting routers
app.use('/api',celebrityManagerRouter);
app.use('/api',celebrityRouter);
app.use('/api',projectRouter);
app.use('/api',gigCelebrityManagerRouter);
app.use('/api',projectCelebrityRouter);
app.use('/api',portfolioRouter);
app.use('/api',projectReviewRouter);
app.use('/api',messageRouter);
app.use('/api',dashboardRouter);

// Sync all models
sequelize.sync({ force: false, alter: true }).then(() => {
  console.log('All models were synchronized successfully.');
}).catch(error => {
  console.error('Error synchronizing models:', error);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});