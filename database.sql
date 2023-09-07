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
    category_name_ids VARCHAR(255),
    other_category_description VARCHAR(500),
    is_active BOOLEAN DEFAULT true, 
    sent_contract_link INTEGER REFERENCES "template_links"(id),
    dropbox_folder_id VARCHAR(255),
    dropbox_folder_path VARCHAR(255),
    dropbox_shared_link VARCHAR(350)
);

-- Links to send to user
CREATE TABLE template_links (
id SERIAL PRIMARY KEY,
"name" VARCHAR(255),
"type" VARCHAR(255),
"link" VARCHAR(350)
);


INSERT INTO template_links ("name", "type", link)
VALUES
('Consignment Agreement', 'contract', 'https://www.dropbox.com/scl/fi/a2ql6gtl5mu4uuaxn0uod/Cause-Cart-Consignment-Agreement.pdf?rlkey=azcb8d6qu2991smm260ue5b89&dl=0'),
('Vendor Agreement', 'contract', 'https://www.dropbox.com/scl/fi/lqypzmz6cdqavs7hrgrxj/Vendor-Agreement.pdf?rlkey=skccrco7cwclgxmsuhenu6rx1&dl=0'),
('Product Templates', 'product templates', 'https://www.dropbox.com/scl/fo/yw434q1cn2nuz7gwdcfi0/h?rlkey=u5g1pfgpzdimtwus80u74k1h1&dl=0'),
('Calendly Link', 'scheduling', 'https://calendly.com/' );


-- Insert all vendor step names
INSERT INTO all_vendor_steps (step_name)
VALUES
('Account Verification'), ('Meeting'), ('Contract'), ('Add Products'), ('Onboarding Complete');

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
('Women’s apparel'),



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


-- Insert dummy data into user DUMMY DATA
INSERT INTO "user" (email, password, authorization_level)
VALUES
('contact@ecohomecreations.com', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('info@charitythreads.org', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('support@pawpals.com', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('info@nurturenatureco.com', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('hello@jewelvogue.net', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('inquiries@greengrowthcoop.com', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('help@tinypaws.store', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('hello@fashionfusion.co', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('info@brightbeginnings.org', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('contact@naturegemsjewels.com', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 0),
('emeraldcausecart@outlook.com', '$2a$10$/jCjDDoD4cUJaNCwfszYgetKrmVhBvpmiYnAtzjnzbS8ovMyD2qVi', 1);

INSERT INTO "vendor_app_info" (
  brand_name, website_url, business_type, country, number_of_products,
  heard_about_us, giveback_selection, user_id, giveback_description,
  nonprofit_selection, nonprofit_description, category_name_ids,
  date_created, date_edited, status_id, current_step_id
) VALUES
  ('EcoHome Creations', 'www.ecohomecreations.com', 'B-corp', 'USA', '11-25',
  'Friend referral', 'Yes', 1, '10% of profits go to local environmental NGOs.',
  'Yes', 'Supporting local environmental causes.', '1', '2023-08-30', '2023-08-30', 5, 1),

  ('CharityThreads', 'www.charitythreads.org', 'Non-Profit 501c3', 'USA', '51-100',
  'Online ad', 'Yes', 2, '100% proceeds go to children`s education programs.',
  'Yes', 'Supporting underprivileged youth education.', '3', '2023-08-30', '2023-08-30', 3, 1),

  ('PawPals', 'www.pawpals.com', 'LLC, S-corp, C-corp', 'USA', '26-50',
  'Social media', 'No but I want to learn more', 3, '',
  'No', '', '8', '2023-08-30', '2023-08-30', 2, 1),

  ('NurtureNature', 'www.nurturenatureco.com', 'B-corp', 'USA', 'more than 100',
  'Trade show', 'Yes', 4, '5% of profits support reforestation projects.',
  'No', '', '1,7', '2023-08-30', '2023-08-30', 7, 1),

  ('JewelVogue', 'www.jewelvogue.net', 'Cooperative', 'USA', '1-10',
  'Online search', 'No', 5, '',
  'No', '', '2,9', '2023-08-30', '2023-08-30', 1, 1),

  ('GreenGrowth', 'www.greengrowthcoop.com', 'Cooperative', 'USA', '11-25',
  'Trade show', 'Yes', 6, '10% of profits fund local gardening initiatives.',
  'Yes', 'Supporting community gardening programs.', '1,7', '2023-08-30', '2023-08-30', 4, 1),

  ('TinyPaws', 'www.tinypaws.store', 'Non-Profit 501c3', 'USA', '11-25',
  'Online ad', 'No', 7, '',
  'Yes', 'Supporting animal rescue organizations.', '8', '2023-08-30', '2023-08-30', 8, 1),

  ('FashionFusion', 'www.fashionfusion.co', 'B-corp', 'USA', '51-100',
  'Friend referral', 'Yes', 8, '15% of profits donated to sustainable fashion projects.',
  'No', '', '10,6', '2023-08-30', '2023-08-30', 6, 1),

  ('BrightBeginnings', 'www.brightbeginnings.org', 'Non-Profit 501c3', 'USA', '1-10',
  'Online search', 'Yes', 9, '100% funds support early childhood education.',
  'Yes', 'Supporting quality preschool programs.', '3', '2023-08-30', '2023-08-30', 9, 1),

  ('NatureGems', 'www.naturegemsjewels.com', 'LLC, S-corp, C-corp', 'USA', '26-50',
  'Social media', 'No', 10, '',
  'No', '', '2', '2023-08-30', '2023-08-30', 2, 1);
