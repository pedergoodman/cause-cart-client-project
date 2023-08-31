
-- Create user_table
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    email VARCHAR(1000),
    password VARCHAR(1000),
    authorization_level INTEGER
);

-- Create status
CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    status VARCHAR(500)
);

-- Create category_names

CREATE TABLE category_names (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);


-- Create vendor_app_info
CREATE TABLE vendor_app_info (
    id SERIAL PRIMARY KEY,
    brand_name VARCHAR(255),
    website_url VARCHAR(1500),
    business_type VARCHAR(255),
    country VARCHAR(255),
    number_of_products VARCHAR(255),
    heard_about_us VARCHAR(255),
    giveback_selection VARCHAR(255),
    user_id INTEGER REFERENCES user_table(id),
    giveback_description VARCHAR(500),
    nonprofit_selection VARCHAR(255),
    nonprofit_description VARCHAR(500),
    date_created DATE,
    date_edited DATE,
    status_id INTEGER REFERENCES status(id)
    selected_categories VARCHAR(255),
    is_active BOOLEAN DEFAULT true, 
    dropbox_folder_id VARCHAR(255),
    dropbox_folder_path VARCHAR(255),
    drobbox_shared_link VARCHAR(350),
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


-- Insert initial values into Onboarding
INSERT INTO status (name)
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


-- THIS IS NEW AND NOT TESTED 🙃

-- Insert statements for the vendor_app_info table
INSERT INTO vendor_app_info (
    brand_name, website_url, business_type, country, number_of_products,
    heard_about_us, giveback_selection, user_id, giveback_description,
    nonprofit_selection, nonprofit_description, selected_categories,
    date_created, date_edited, status_id
) VALUES
    ('EcoHome Creations', 'www.ecohomecreations.com', 'B-corp', 'USA', '11-25',
    'Friend referral', 'Yes', 1, '10% of profits go to local environmental NGOs.',
    'yes', 'Supporting local environmental causes.', 'Home Décor', '2023-08-30', '2023-08-30', 5),

    ('CharityThreads', 'www.charitythreads.org', 'Non-Profit 501c3', 'USA', '51-100',
    'Online ad', 'Yes', 2, '100% proceeds go to children`s education programs.',
    'yes', 'Supporting underprivileged youth education.', 'Kids Apparel', '2023-08-30', '2023-08-30', 3),

    ('PawPals', 'www.pawpals.com', 'LLC, S-corp, C-corp', 'USA', '26-50',
    'Social media', 'No but I want to learn more', 3, '',
    'no', '', 'Pets', '2023-08-30', '2023-08-30', 2),

    ('NurtureNature', 'www.nurturenatureco.com', 'B-corp', 'USA', 'more than 100',
    'Trade show', 'Yes', 4, '5% of profits support reforestation projects.',
    'no', '', 'Home Décor, Beauty + Wellness', '2023-08-30', '2023-08-30', 7),

    ('JewelVogue', 'www.jewelvogue.net', 'Cooperative', 'USA', '1-10',
    'Online search', 'No', 5, '',
    'no', '', 'Jewelry, Women`s accessories', '2023-08-30', '2023-08-30', 1),

    ('GreenGrowth', 'www.greengrowthcoop.com', 'Cooperative', 'USA', '11-25',
    'Trade show', 'Yes', 6, '10% of profits fund local gardening initiatives.',
    'yes', 'Supporting community gardening programs.', 'Home Décor, Beauty + Wellness', '2023-08-30', '2023-08-30', 4),

    ('TinyPaws', 'www.tinypaws.store', 'Non-Profit 501c3', 'USA', '11-25',
    'Online ad', 'No', 7, '',
    'yes', 'Supporting animal rescue organizations.', 'Pets', '2023-08-30', '2023-08-30', 8),

    ('FashionFusion', 'www.fashionfusion.co', 'B-corp', 'USA', '51-100',
    'Friend referral', 'Yes', 8, '15% of profits donated to sustainable fashion projects.',
    'no', '', 'Women`s apparel, Men`s apparel', '2023-08-30', '2023-08-30', 6),

    ('BrightBeginnings', 'www.brightbeginnings.org', 'Non-Profit 501c3', 'USA', '1-10',
    'Online search', 'Yes', 9, '100% funds support early childhood education.',
    'yes', 'Supporting quality preschool programs.', 'Kids Apparel', '2023-08-30', '2023-08-30', 9),
    
    ('NatureGems', 'www.naturegemsjewels.com', 'LLC, S-corp, C-corp', 'USA', '26-50',
    'Social media', 'No', 10, '',
    'no', '', 'Jewelry', '2023-08-30', '2023-08-30', 2);