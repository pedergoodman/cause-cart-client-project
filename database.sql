-- Create user_table
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(1000),
    password VARCHAR(1000),
    authorization_level INTEGER NOT NULL DEFAULT 0
);

-- Create status
CREATE TABLE "status" (
    id SERIAL PRIMARY KEY,
    status VARCHAR(500)
);

-- Create category_names
CREATE TABLE "category_names" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Links to send to user
CREATE TABLE template_links (
id SERIAL PRIMARY KEY,
"name" VARCHAR(255),
"type" VARCHAR(255),
link VARCHAR(350)
);

-- Create vendor_app_info
CREATE TABLE "vendor_app_info" (
    id SERIAL PRIMARY KEY,
    brand_name VARCHAR(255),
    website_url VARCHAR(1500),
    business_type VARCHAR(255),
    country VARCHAR(255),
    number_of_products VARCHAR(255),
    heard_about_us VARCHAR(255),
    giveback_selection VARCHAR(255),
    user_id INTEGER REFERENCES "user"(id),
    giveback_description VARCHAR(500),
    nonprofit_selection VARCHAR(255),
    nonprofit_description VARCHAR(500),
    date_created DATE,
    date_edited DATE,
    status_id INTEGER REFERENCES "status"(id),
    selected_categories VARCHAR(255),
    is_active BOOLEAN DEFAULT true, 
    dropbox_folder_id VARCHAR(255),
    dropbox_folder_path VARCHAR(255),
    dropbox_shared_link VARCHAR(350)
);

ALTER TABLE vendor_app_info
ADD sent_contract_link INTEGER REFERENCES "template_links"(id);


INSERT INTO template_links ("name", "type", link)
VALUES
('Consignment Agreement', 'contract', 'INSERT YOUR CONSIGNMENT AGREEMENT DROPBOX SHARE LINK HERE'),
('Vendor Agreement', 'contract', 'INSERT YOUR VENDOR AGREEMENT DROPBOX SHARE LINK HERE'),
('Product Templates', 'product templates', 'INSERT YOUR PRODUCT TEMPLATES DROPBOX FOLDER SHARE LINK HERE'),
('Calendly Link', 'scheduling', 'INSERT YOUR CALENDLY MEETING LINK HERE' );


-- Insert initial values into category_names REQUIRED DATA
INSERT INTO category_names (name)
VALUES 
('Home Décor'),
('Jewelry'),
('Kids Apparel'),
('Kids + Baby (non-Apparel)'),
('Men’s accessories'),
('Men’s apparel'),
('Beauty & Wellness'),
('Pets'),
('Women’s accessories'),
('Women’s apparel');

-- Insert initial values into Onboarding status REQUIRED DATA
INSERT INTO status (status)
VALUES 
('Intake Form Submitted'),
('Approved Intake Form'),
('Sent Contract'),
('Contract Submitted'),
('Sent Product Spreadsheet'),
('Product Spreadsheet Submitted'),
('Denied Application'),
('Onboarding Complete'),
('Paused Onboarding');

-- ** END REQUIRED DATA **