# CRUD Routes for CelebrityManager
POST /celebrity-managers -> Create a new manager
GET /celebrity-managers -> List all managers
GET /celebrity-managers/{manager_id} -> Retrieve a specific manager by ID
PUT /celebrity-managers/{manager_id} -> Update a specific manager by ID
DELETE /celebrity-managers/{manager_id} -> Delete a specific manager by ID

# CRUD Routes for Celebrity
POST /celebrities -> Create a new celebrity
GET /celebrities -> List all celebrities
GET /celebrities/{celebrity_id} -> Retrieve a specific celebrity by ID
PUT /celebrities/{celebrity_id} -> Update a specific celebrity by ID
DELETE /celebrities/{celebrity_id} -> Delete a specific celebrity by ID

# CRUD Routes for Project
POST /projects -> Create a new project
GET /projects -> List all projects
GET /projects/{project_id} -> Retrieve a specific project by ID
PUT /projects/{project_id} -> Update a specific project by ID
DELETE /projects/{project_id} -> Delete a specific project by ID

# CRUD Routes for GigCelebrityManager
POST /gig-celebrity-managers -> Create a new gig-celebrity-manager association
GET /gig-celebrity-managers -> List all gig-celebrity-manager associations
GET /gig-celebrity-managers/{gig_id} -> Retrieve a specific association by gig ID
PUT /gig-celebrity-managers/{gig_id} -> Update a specific association by gig ID
DELETE /gig-celebrity-managers/{gig_id} -> Delete a specific association by gig ID

# CRUD Routes for ProjectCelebrity
POST /project-celebrities -> Create a new project-celebrity association
GET /project-celebrities -> List all project-celebrity associations
GET /project-celebrities/{project_id}/{celebrity_id} -> Retrieve a specific association by project and celebrity ID
DELETE /project-celebrities/{project_id}/{celebrity_id} -> Delete a specific association by project and celebrity ID

# CRUD Routes for Portfolio
POST /portfolios -> Create a new portfolio
GET /portfolios -> List all portfolios
GET /portfolios/{portfolio_id} -> Retrieve a specific portfolio by ID
PUT /portfolios/{portfolio_id} -> Update a specific portfolio by ID
DELETE /portfolios/{portfolio_id} -> Delete a specific portfolio by ID

# CRUD Routes for ProjectReview
POST /project-reviews -> Create a new project review
GET /project-reviews -> List all project reviews
GET /project-reviews/{review_id} -> Retrieve a specific project review by ID
PUT /project-reviews/{review_id} -> Update a specific project review by ID
DELETE /project-reviews/{review_id} -> Delete a specific project review by ID

# CRUD Routes for Message
POST /messages -> Send a new message
GET /messages -> List all messages
GET /messages/{message_id} -> Retrieve a specific message by ID
PUT /messages/{message_id} -> Update a specific message by ID (e.g., mark as read)
DELETE /messages/{message_id} -> Delete a specific message by ID

# Dashboard Insight Routes
GET /dashboard/manager-insights -> Get insights about managers (e.g., total number, recent sign-ups)
GET /dashboard/celebrity-insights -> Get insights about celebrities (e.g., total number, recent activities)
GET /dashboard/project-insights -> Get insights about projects (e.g., upcoming projects, total number)
GET /dashboard/revenue-insights -> Get financial insights (e.g., total revenue, profit sharing)
