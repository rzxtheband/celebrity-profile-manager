-- Inserting into CelebrityManagers
INSERT INTO `celebrityManagers` (`full_name`, `email`, `phone_number`, `bio`, `profile_picture_url`, `website_url`, `address`, `city`, `state`, `country`, `zipcode`, `social_media_links`) VALUES
('Alex Johnson', 'alex.johnson@example.com', '123-456-7890', 'Experienced manager in the entertainment industry.', 'http://example.com/profile/alex.jpg', 'http://alexjohnson.com', '123 Hollywood Blvd', 'Los Angeles', 'CA', 'USA', '90068', '{"twitter": "http://twitter.com/alexjohnson"}'),
('Jamie Smith', 'jamie.smith@example.com', '098-765-4321', 'Specialist in managing musical talents.', 'http://example.com/profile/jamie.jpg', 'http://jamiesmith.com', '456 Music Ave', 'Nashville', 'TN', 'USA', '37203', '{"instagram": "http://instagram.com/jamiesmith"}');

-- Inserting into Celebrities
INSERT INTO `celebrities` (`full_name`, `stage_name`, `bio`, `skills_and_talents`, `performances`, `physique`, `photo_gallery`, `birthdate`, `nationality`, `height`, `weight`, `eye_color`, `hair_color`, `social_media_links`) VALUES
('John Doe', 'Johnny', 'Actor known for dramatic roles.', 'Acting, Singing', 'Performed in various theatre productions.', 'Tall and athletic', '{"gallery": ["http://example.com/gallery/john1.jpg", "http://example.com/gallery/john2.jpg"]}', '1990-01-01', 'American', 180.34, 78.65, 'Blue', 'Brown', '{"facebook": "http://facebook.com/johndoe"}'),
('Jane Roe', 'Janie', 'Singer with a powerful voice.', 'Singing, Dancing', 'Toured with famous bands.', 'Petite and graceful', '{"gallery": ["http://example.com/gallery/jane1.jpg", "http://example.com/gallery/jane2.jpg"]}', '1985-05-15', 'Canadian', 165.10, 54.43, 'Green', 'Blonde', '{"youtube": "http://youtube.com/janeroe"}');

-- Inserting into Projects
INSERT INTO `projects` (`type`, `title`, `description`, `date`, `start_time`, `end_time`, `timezone`, `venue`, `organizer`, `registration_url`, `max_attendees`, `min_age_requirement`, `ticket_price`, `production_budget`, `profit_sharing_percentage`, `tags`) VALUES
('film', 'Epic Movie', 'A blockbuster film set in medieval times.', '2024-12-15', '18:00:00', '20:00:00', 'PST', 'Epic Studios', 'Epic Productions', 'http://epicmovie.com/register', 500, 18, 15.99, 2000000.00, 5.00, '{"genre": ["adventure", "drama"]}'),
('event', 'Music Fest', 'An annual music festival featuring top artists.', '2024-06-20', '12:00:00', '23:59:00', 'EST', 'Big Park', 'Music Events Inc.', 'http://musicfest.com/register', 10000, 16, 99.99, 500000.00, 10.00, '{"genre": ["pop", "rock", "electronic"]}');

-- Inserting into GigCelebrityManagers
INSERT INTO `gigCelebrityManagers` (`gig_id`, `manager_id`, `bid_amount`, `status`, `message`, `proposal`, `notes`) VALUES
(1, 1, 10000.00, 'pending', 'Looking forward to this collaboration.', '{"proposalDetails": "Proposal PDF link"}', 'This is a high-profile project.'),
(2, 2, 15000.00, 'approved', 'Excited to bring our talent to your event.', '{"proposalDetails": "Proposal PDF link"}', 'Ensure to provide VIP access.');

-- Inserting into ProjectCelebrities
INSERT INTO `projectCelebrities` (`project_id`, `celebrity_id`) VALUES
(1, 1),
(2, 2);

-- Inserting into Portfolios
INSERT INTO `portfolios` (`manager_id`, `celebrity_id`, `project_id`, `portfolio_url`, `description`) VALUES
(1, 1, 1, 'http://example.com/portfolio/1', 'John Doe\'s leading role in Epic Movie.'),
(2, 2, 2, 'http://example.com/portfolio/2', 'Jane Roe\'s headline performance at Music Fest.');

-- Inserting into ProjectReviews
INSERT INTO `projectReviews` (`project_id`, `manager_id`, `rating`, `review_text`) VALUES
(1, 1, 4.5, 'The project was a massive success with great audience reception.'),
(2, 2, 4.8, 'An unforgettable experience with stellar performances.');

-- Inserting into Messages
INSERT INTO `messages` (`sender_id`, `receiver_id`, `message_text`, `is_read`, `is_archived`) VALUES
(1, 2, 'We have a new opportunity for your client.', FALSE, FALSE),
(2, 1, 'Thank you for the offer, we will review and get back to you.', TRUE, FALSE);
