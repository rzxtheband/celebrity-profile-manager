I am creating an application for celebrity managers. 
There will be several different entities in the application.
1. CelebrityManager - This is generally an agency or a PR manager who will approach the celebrities and manage them. The celebrity managers can also have their profiles which will highlight their management experience, events and existing celebrity management portfolio.
2. Celebrities - This is an actor / actress / influencer person who is going to have a very detailed profile along with bio, skills and talents, performances, physique, photo_gallery and a lot more.
3. Events - This is the entity which will have specific gigs which will mention the event / film details and their exact requirement. CelebrityManagers can apply into these gigs or events / films and can bid their case for a particular celebrity.
The owner of the event will review the profiles and will get in touch with the Manager and can proceed further for a deal using the app.

Please write a detailed mysql mariadb DDL schema with super detailed tables which will be closest to production and will store every possible attributes imaginable for each flows in this application and any additional tables required.





CelebrityManager:

Need: Stores information about celebrity managers or agencies.
Function: Allows managers to create profiles highlighting their experience, contact information, social media links, and address details. It enables them to participate in bids, manage portfolios, and receive messages.
Celebrity:

Need: Stores information about celebrities.
Function: Celebrities can create detailed profiles showcasing their bio, skills, performances, physical attributes, and photo galleries. It facilitates them to participate in gigs, events, or films and manage their portfolios.
Project:

Need: Combines events, gigs, and films into a single entity.
Function: Allows creation of various types of projects with detailed information such as title, description, date, venue, organizer, registration details, budget, and profit-sharing percentage. It supports the core functionality of the application by providing a platform for managers to apply for projects and for organizers to manage project details.
GigCelebrityManager:

Need: Manages bids and statuses for gigs.
Function: Facilitates the bidding process for managers interested in securing celebrities for gigs. It allows managers to place bids, communicate messages, submit proposals, and track the status of their bids.
ProjectCelebrity:

Need: Establishes a many-to-many relationship between projects and celebrities.
Function: Links celebrities to projects they are associated with. It allows for flexibility in assigning celebrities to multiple projects and facilitates efficient management of celebrity involvement in various events, gigs, or films.
Portfolio:

Need: Stores portfolios submitted by managers for projects.
Function: Allows managers to showcase their previous work, experiences, and successful collaborations. It provides organizers with insights into the capabilities and expertise of managers when evaluating bids and selecting participants for projects.
ProjectReview:

Need: Stores reviews given by managers for projects.
Function: Enables managers to provide feedback and ratings for projects they have participated in. It helps organizers to assess the performance and quality of projects and build trust among stakeholders.
Message:

Need: Facilitates communication between managers.
Function: Allows managers to exchange messages, discuss project details, negotiate terms, and collaborate effectively. It enhances communication and coordination throughout the project lifecycle.
Overall, the schema supports the featureset described in the application by providing comprehensive data management capabilities for celebrity managers, celebrities, projects, bids, portfolios, reviews, and communication. It enables efficient workflow management, enhances transparency and collaboration, and facilitates the successful execution of events, gigs, and films.