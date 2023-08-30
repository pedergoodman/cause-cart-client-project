-- Database Name: cause_cart

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- CREATE TABLE user_table (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(1000),
--     password VARCHAR(1000),
--     authorization_level INTEGER
-- );

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE category_names (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Insert initial values into category_names
INSERT INTO category_names (name)
VALUES 
('Home Décor'),
('Jewelry'),
('Kids Apparel'),
('Kids + Baby (non-Apparel)'),
('Men`s accessories'),
('Men`s apparel'),
('Beauty + Wellness'),
('Pets'),
('Women`s accessories'),
('Women`s apparel'),
('Other');

-- Create Onboarding table
CREATE TABLE Onboarding (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Insert initial values into Onboarding
INSERT INTO Onboarding (name)
VALUES 
('Intake Form Submitted'),
('Approved Intake Form'),
('Sent Contract'),
('Contract Submitted'),
('Sent Product Spreadsheet'),
('Product Spreadsheet Submitted'),
('Approved Product'),
('Denied Application'),
('Onboarding Complete'),
('Paused Onboarding');

-- Create VendorStatus table
CREATE TABLE VendorStatus (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Insert initial values into VendorStatus
INSERT INTO VendorStatus (name)
VALUES 
('Active'),
('Inactive'),
('Pending');

-- Create SDG table
CREATE TABLE SDG (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Insert initial values into SDG
INSERT INTO SDG (name)
VALUES 
('No Poverty'),
('Zero Hunger'),
('Good Health and Well-Being'),
('Quality Education'),
('Gender Equality'),
('Clean Water and Sanitation'),
('Affordable and Clean Energy'),
('Decent Work and Economic Growth'),
('Industry, Innovation, and Infrastructure'),
('Reduced Inequalities'),
('Sustainable Cities and Communities'),
('Responsible Consumption and Production'),
('Climate Action'),
('Life Below Water'),
('Life on Land'),
('Peace, Justice and Strong Institutions'),
('Partnerships');

-- Create vendor_app_info table
CREATE TABLE vendor_app_info (
    id SERIAL PRIMARY KEY,
    brand_name VARCHAR(255),
    email VARCHAR(255),
    website_url VARCHAR(1500),
    business_type VARCHAR(255),
    giveback BOOLEAN,
    giveback_description TEXT,
    partner_with_nonprofit BOOLEAN,
    nonprofit_name VARCHAR(255),
    interested_in_partnership BOOLEAN,
    partnership_description TEXT,
    primary_category INTEGER REFERENCES category_names(id),
    country VARCHAR(255),
    number_of_products VARCHAR(255),
    heard_about_us VARCHAR(255),
    user_id INTEGER REFERENCES "user"(id),
    date_created TIMESTAMP,
    date_edited TIMESTAMP,
    onboarding_stage_id INTEGER REFERENCES Onboarding(id),
    status_id INTEGER REFERENCES VendorStatus(id),
    sdg_id INTEGER REFERENCES SDG(id)
);


-- Create vendor_app_info table
-- CREATE TABLE vendor_app_info (
--     id SERIAL PRIMARY KEY,
--     brand_name VARCHAR(255),
--     email VARCHAR(255),
--     website_url VARCHAR(1500),
--     business_type VARCHAR(255),
--     giveback BOOLEAN,
--     giveback_description TEXT,
--     partner_with_nonprofit BOOLEAN,
--     nonprofit_name VARCHAR(255),
--     interested_in_partnership BOOLEAN,
--     partnership_description TEXT,
--     primary_category INTEGER REFERENCES category_names(id),
--     country VARCHAR(255),
--     number_of_products VARCHAR(255),
--     heard_about_us VARCHAR(255),
--     user_id INTEGER REFERENCES user_table(id),
--     date_created TIMESTAMP,
--     date_edited TIMESTAMP,
--     onboarding_stage_id INTEGER REFERENCES Onboarding(id),
--     status_id INTEGER REFERENCES VendorStatus(id),
--     sdg_id INTEGER REFERENCES SDG(id)
-- );

-- Mock/"Dummy" Data for Testing
-- INSERT INTO user_table (email, password, authorization_level)
-- VALUES
-- ('admin1@example.com', 'admin1', 1),
-- ('vendor1@example.com', 'password1', 1),
-- ('vendor2@example.com', 'password2', 1),
-- ('vendor3@example.com', 'password3', 1),
-- ('vendor4@example.com', 'password4', 1),
-- ('vendor5@example.com', 'password5', 1),
-- ('vendor6@example.com', 'password6', 1),
-- ('vendor7@example.com', 'password7', 1),
-- ('vendor8@example.com', 'password8', 1),
-- ('vendor9@example.com', 'password9', 1),
-- ('vendor10@example.com', 'password10', 1);

INSERT INTO "user" (username, password)
VALUES
('vendor1', 'password1'),
('vendor2', 'password2'),
('vendor3', 'password3'),
('vendor4', 'password4'),
('vendor5', 'password5'),
('vendor6', 'password6'),
('vendor7', 'password7'),
('vendor8', 'password8'),
('vendor9', 'password9'),
('vendor10', 'password10');

INSERT INTO "vendor_app_info" 
(
    brand_name, email, website_url, business_type, 
    giveback, giveback_description, partner_with_nonprofit, 
    nonprofit_name, interested_in_partnership, partnership_description,
    primary_category, country, number_of_products, heard_about_us,
    user_id, date_created, date_edited, onboarding_stage_id, status_id, sdg_id
)
VALUES
('Brand1', 'email1@example.com', 'http://www.brand1.com', 'LLC', 
true, 'We donate 10% of our profits to charity.', true, 
'Charity1', false, null,
1, 'USA', '1-10', 'Social Media',
1, '2023-01-01 00:00:00', '2023-01-01 00:00:00', 1, 1, 1),

('Brand2', 'email2@example.com', 'http://www.brand2.com', 'B-corp', 
true, 'We use sustainable materials.', false, 
null, true, 'We are interested in partnering with a charity that aligns with our mission.',
2, 'Canada', '11-25', 'Another brand',
2, '2023-02-01 00:00:00', '2023-02-01 00:00:00', 2, 2, 2),

('Brand3', 'email3@example.com', 'http://www.brand3.com', 'Non-Profit 501c3', 
true, 'We donate 5% of our profits to charity.', true, 
'Charity3', false, null,
3, 'UK', '26-50', 'Non-profit organization',
3, '2023-03-01 00:00:00', '2023-03-01 00:00:00', 3, 3, 3),

('Brand4', 'email4@example.com', 'http://www.brand4.com', 'LLC', 
false, null, false, 
null, true, 'We are interested in learning more about how to start giving back.',
4, 'USA', '51-100', 'Another brand',
4, '2023-04-01 00:00:00', '2023-04-01 00:00:00', 4, 1, 4),

('Brand5', 'email5@example.com', 'http://www.brand5.com', 'B-corp', 
true, 'We use sustainable materials.', true, 
'Charity5', false, null,
5, 'Canada', 'More than 100', 'Social Media',
5, '2023-05-01 00:00:00', '2023-05-01 00:00:00', 5, 2, 5),

('Brand6', 'email6@example.com', 'http://www.brand6.com', 'Cooperative', 
false, null, false, 
null, false, null,
6, 'UK', '1-10', 'Non-profit organization',
6, '2023-06-01 00:00:00', '2023-06-01 00:00:00', 6, 3, 6),

('Brand7', 'email7@example.com', 'http://www.brand7.com', 'LLC', 
true, 'We donate 10% of our profits to charity.', false, 
null, true, 'We are interested in CompanyName assisting in a partnership that aligns with our mission.',
7, 'USA', '11-25', 'CompanyName employee',
7, '2023-07-01 00:00:00', '2023-07-01 00:00:00', 7, 1, 7),

('Brand8', 'email8@example.com', 'http://www.brand8.com', 'B-corp', 
true, 'We use sustainable materials.', true, 
'Charity8', false, null,
8, 'Canada', '26-50', 'Another brand',
8, '2023-08-01 00:00:00', '2023-08-01 00:00:00', 8, 2, 8),

('Brand9', 'email9@example.com', 'http://www.brand9.com', 'Non-Profit 501c3', 
false, null, true, 
'Charity9', false, null,
9, 'UK', '51-100', 'Social Media',
9, '2023-09-01 00:00:00', '2023-09-01 00:00:00', 9, 3, 9),


('Brand10', 'email10@example.com', 'http://www.brand10.com', 'Cooperative', 
false, null, false, 
null, true, 'We are interested in partnering with a charity that aligns with our mission.',
10, 'Canada', '51-100', 'CompanyName employee',
10, '2023-10-01 00:00:00', '2023-10-01 00:00:00', 10, 3, 17);




-- ** 2ND VERSION: STAGE and STATUS as ENUMS **
-- -- Database Name: cause_cart

-- -- USER is a reserved keyword with Postgres
-- -- You must use double quotes in every query that user is in:
-- -- ex. SELECT * FROM "user";
-- -- Otherwise you will have errors!
-- CREATE TABLE user_table (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(1000),
--     password VARCHAR(1000),
--     authorization_level INTEGER
-- );

-- CREATE TABLE category_names (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255)
-- );

-- -- Insert initial values into category_names
-- INSERT INTO category_names (name)
-- VALUES 
-- ('Home Décor'),
-- ('Jewelry'),
-- ('Kids Apparel'),
-- ('Kids + Baby (non-Apparel)'),
-- ('Men’s accessories'),
-- ('Men’s apparel'),
-- ('Beauty + Wellness'),
-- ('Pets'),
-- ('Women’s accessories'),
-- ('Women’s apparel'),
-- ('Other');

-- CREATE TYPE Onboarding AS ENUM (
--     'Intake Form Submitted',
--     'Approved Intake Form',
--     'Sent Contract',
--     'Contract Submitted',
--     'Sent Product Spreadsheet',
--     'Product Spreadsheet Submitted',
--     'Approved Product',
--     'Denied Application',
--     'Onboarding Complete',
--     'Paused Onboarding'
-- );

-- CREATE TYPE VendorStatus AS ENUM (
--     'Active',
--     'Inactive',
--     'Pending'
-- );

-- CREATE TYPE SDG AS ENUM (
--     'No Poverty',
--     'Zero Hunger',
    -- 'Good Health and Well-Being',
    -- 'Quality Education',
    -- 'Gender Equality',
    -- 'Clean Water and Sanitation',
    -- 'Affordable and Clean Energy',
    -- 'Decent Work and Economic Growth',
    -- 'Industry, Innovation, and Infrastructure',
    -- 'Reduced Inequalities',
    -- 'Sustainable Cities and Communities',
    -- 'Responsible Consumption and Production',
    -- 'Climate Action',
    -- 'Life Below Water',
    -- 'Life on Land',
    -- 'Peace, Justice and Strong Institutions',
--     'Partnerships'
-- );

-- CREATE TABLE vendor_app_info (
--     id SERIAL PRIMARY KEY,
--     brand_name VARCHAR(255),
--     email VARCHAR(255),
--     website_url VARCHAR(1500),
--     business_type VARCHAR(255),
--     giveback BOOLEAN,
--     giveback_description TEXT,
--     partner_with_nonprofit BOOLEAN,
--     nonprofit_name VARCHAR(255),
--     interested_in_partnership BOOLEAN,
--     partnership_description TEXT,
--     primary_category INTEGER REFERENCES category_names(id),
--     country VARCHAR(255),
--     number_of_products VARCHAR(255),
--     heard_about_us VARCHAR(255),
--     user_id INTEGER REFERENCES user_table(id),
--     date_created DATE,
--     date_edited DATE,
--     onboarding_stage Onboarding,
--     status VendorStatus,
--     sdg SDG
-- );



-- ** OG ** -- 
-- -- USER is a reserved keyword with Postgres
-- -- You must use double quotes in every query that user is in:
-- -- ex. SELECT * FROM "user";
-- -- Otherwise you will have errors!

-- CREATE TABLE user_table (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(1000),
--     password VARCHAR(1000),
--     authorization_level INTEGER
-- );

-- CREATE TABLE status (
--     id SERIAL PRIMARY KEY,
--     status VARCHAR(500)
-- );

-- CREATE TABLE category_names (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255)
-- );

-- CREATE TABLE vendor_app_info (
--     id SERIAL PRIMARY KEY,
--     brand_name VARCHAR(255),
--     website_url VARCHAR(1500),
--     business_type VARCHAR(255),
--     country VARCHAR(255),
--     number_of_products VARCHAR(255),
--     heard_about_us VARCHAR(255),
--     giveback_selection VARCHAR(255),
--     user_id INTEGER REFERENCES user_table(id),
--     giveback_description VARCHAR(500),
--     nonprofit_selection VARCHAR(255),
--     nonprofit_description VARCHAR(500),
--     date_created DATE,
--     date_edited DATE,
--     status_id INTEGER REFERENCES status(id)
-- );