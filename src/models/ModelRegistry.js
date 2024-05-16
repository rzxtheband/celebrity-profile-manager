
const Celebrity = require('./Celebrity');
const CelebrityManager = require('./CelebrityManager');
const GigCelebrityManager = require('./GigCelebrityManager');
const Message = require('./Message');
const Portfolio = require('./Portfolio');
const Project = require('./Project');
const ProjectCelebrity = require('./ProjectCelebrity');
const ProjectReview = require('./ProjectReview');


// Associations for CelebrityManager
CelebrityManager.hasMany(Portfolio, { foreignKey: 'manager_id' });
CelebrityManager.hasMany(ProjectReview, { foreignKey: 'manager_id' });
CelebrityManager.hasMany(Message, { as: 'SentMessages', foreignKey: 'sender_id' });
CelebrityManager.hasMany(Message, { as: 'ReceivedMessages', foreignKey: 'receiver_id' });
CelebrityManager.hasMany(GigCelebrityManager, { foreignKey: 'manager_id' });

// Associations for Celebrity
Celebrity.belongsToMany(Project, { through: ProjectCelebrity, foreignKey: 'celebrity_id' });
Celebrity.hasMany(Portfolio, { foreignKey: 'celebrity_id' });

// Associations for Project
Project.belongsToMany(Celebrity, { through: ProjectCelebrity, foreignKey: 'project_id' });
Project.hasMany(ProjectReview, { foreignKey: 'project_id' });
Project.hasOne(GigCelebrityManager, { foreignKey: 'gig_id' });

// Associations for GigCelebrityManager
GigCelebrityManager.belongsTo(Project, { foreignKey: 'gig_id' });
GigCelebrityManager.belongsTo(CelebrityManager, { foreignKey: 'manager_id' });

// Associations for ProjectCelebrity
ProjectCelebrity.belongsTo(Project, { foreignKey: 'project_id' });
ProjectCelebrity.belongsTo(Celebrity, { foreignKey: 'celebrity_id' });

// Associations for Portfolio
Portfolio.belongsTo(CelebrityManager, { foreignKey: 'manager_id' });
Portfolio.belongsTo(Celebrity, { foreignKey: 'celebrity_id' });
Portfolio.belongsTo(Project, { foreignKey: 'project_id' });

// Associations for ProjectReview
ProjectReview.belongsTo(Project, { foreignKey: 'project_id' });
ProjectReview.belongsTo(CelebrityManager, { foreignKey: 'manager_id' });

// Associations for Message
Message.belongsTo(CelebrityManager, { as: 'Sender', foreignKey: 'sender_id' });
Message.belongsTo(CelebrityManager, { as: 'Receiver', foreignKey: 'receiver_id' });

module.exports = {
    Celebrity,
    CelebrityManager,
    GigCelebrityManager,
    Message,
    Portfolio,
    Project,
    ProjectCelebrity,
    ProjectReview
}
