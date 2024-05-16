CREATE TABLE CelebrityManager (
    manager_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    bio TEXT,
    profile_picture_url VARCHAR(255),
    website_url VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    zipcode VARCHAR(20),
    social_media_links JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Celebrity (
    celebrity_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    stage_name VARCHAR(100),
    bio TEXT,
    skills_and_talents TEXT,
    performances TEXT,
    physique TEXT,
    photo_gallery JSON,
    birthdate DATE,
    nationality VARCHAR(100),
    height DECIMAL(5, 2),
    weight DECIMAL(5, 2),
    eye_color VARCHAR(50),
    hair_color VARCHAR(50),
    social_media_links JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Project (
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    type ENUM('event', 'gig', 'film') NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE,
    start_time TIME,
    end_time TIME,
    timezone VARCHAR(50),
    venue VARCHAR(255),
    organizer VARCHAR(100),
    registration_url VARCHAR(255),
    max_attendees INT,
    min_age_requirement INT,
    ticket_price DECIMAL(10, 2),
    production_budget DECIMAL(15, 2),
    profit_sharing_percentage DECIMAL(5, 2), -- Profit sharing percentage for managing agency
    tags JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE GigCelebrityManager (
    gig_id INT PRIMARY KEY,
    manager_id INT,
    bid_amount DECIMAL(10, 2),
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    message TEXT,
    proposal JSON,
    notes TEXT,
    FOREIGN KEY (gig_id) REFERENCES Project(project_id),
    FOREIGN KEY (manager_id) REFERENCES CelebrityManager(manager_id)
);

CREATE TABLE ProjectCelebrity (
    project_id INT,
    celebrity_id INT,
    PRIMARY KEY (project_id, celebrity_id),
    FOREIGN KEY (project_id) REFERENCES Project(project_id),
    FOREIGN KEY (celebrity_id) REFERENCES Celebrity(celebrity_id)
);

CREATE TABLE Portfolio (
    portfolio_id INT PRIMARY KEY AUTO_INCREMENT,
    manager_id INT,
    celebrity_id INT,
    project_id INT,
    portfolio_url VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (manager_id) REFERENCES CelebrityManager(manager_id),
    FOREIGN KEY (celebrity_id) REFERENCES Celebrity(celebrity_id),
    FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE ProjectReview (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT,
    manager_id INT,
    rating DECIMAL(3, 2),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Project(project_id),
    FOREIGN KEY (manager_id) REFERENCES CelebrityManager(manager_id)
);

CREATE TABLE Message (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT,
    receiver_id INT,
    message_text TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT 0,
    is_archived BOOLEAN DEFAULT 0,
    FOREIGN KEY (sender_id) REFERENCES CelebrityManager(manager_id),
    FOREIGN KEY (receiver_id) REFERENCES CelebrityManager(manager_id)
);

-- Additional tables for features like notifications, user authentication, etc.
