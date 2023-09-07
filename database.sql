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
    dropbox_shared_link VARCHAR(350),
    sent_contract_link INTEGER REFERENCES "template_links"(id)
);



INSERT INTO template_links ("name", "type", link)
VALUES
('Consignment Agreement', 'contract', 'https://www.dropbox.com/scl/fi/a2ql6gtl5mu4uuaxn0uod/Cause-Cart-Consignment-Agreement.pdf?rlkey=azcb8d6qu2991smm260ue5b89&dl=0'),
('Vendor Agreement', 'contract', 'https://www.dropbox.com/scl/fi/lqypzmz6cdqavs7hrgrxj/Vendor-Agreement.pdf?rlkey=skccrco7cwclgxmsuhenu6rx1&dl=0'),
('Product Templates', 'product templates', 'https://www.dropbox.com/scl/fo/yw434q1cn2nuz7gwdcfi0/h?rlkey=u5g1pfgpzdimtwus80u74k1h1&dl=0'),
('Calendly Link', 'scheduling', 'https://calendly.com/' );


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



-- INSERT WITH DROPBOX LINKS!! 
INSERT INTO "public"."vendor_app_info"("id","user_id","brand_name","website_url","business_type","country","number_of_products","heard_about_us","giveback_selection","giveback_description","nonprofit_selection","nonprofit_description","date_created","date_edited","status_id","selected_categories","is_active","dropbox_folder_id","dropbox_folder_path","dropbox_shared_link")
VALUES
(1,1,E'EcoHome Creations',E'www.ecohomecreations.com',E'B-corp',E'USA',E'11-25',E'Friend referral',E'Yes',E'10% of profits go to local environmental NGOs.',E'Yes',E'Supporting local environmental causes.',E'2023-08-30',E'2023-08-30',8,E'Home Décor',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAaQ',E'/vendor-submitted-onboarding-docs/ecohome creations documents',E'https://www.dropbox.com/scl/fo/eogtpxcso7vkjfe5h9al5/h?rlkey=qrlrjywxim4jvttk5z7rhzss7&dl=0'),
(2,2,E'CharityThreads',E'www.charitythreads.org',E'Non-Profit 501c3',E'USA',E'51-100',E'Online ad',E'Yes',E'100% proceeds go to children`s education programs.',E'Yes',E'Supporting underprivileged youth education.',E'2023-08-30',E'2023-08-30',8,E'Kids Apparel',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAag',E'/vendor-submitted-onboarding-docs/charitythreads documents',E'https://www.dropbox.com/scl/fo/twez45n0fm1r4y2kkg5jy/h?rlkey=vsnaxpxsufugyf2zpo6lucl1j&dl=0'),
(3,3,E'PawPals',E'www.pawpals.com',E'LLC, S-corp, C-corp',E'USA',E'26-50',E'Social media',E'No but I want to learn more',E'',E'No',E'',E'2023-08-30',E'2023-08-30',2,E'Pets',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAaw',E'/vendor-submitted-onboarding-docs/pawpals documents',E'https://www.dropbox.com/scl/fo/ungpzszp1gio4e6hm5f2c/h?rlkey=e800f1dp61u140zu5km82192s&dl=0'),
(4,4,E'NurtureNature',E'www.nurturenatureco.com',E'B-corp',E'USA',E'more than 100',E'Trade show',E'Yes',E'5% of profits support reforestation projects.',E'No',E'',E'2023-08-30',E'2023-08-30',7,E'Home Décor, Beauty + Wellness',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAbA',E'/vendor-submitted-onboarding-docs/nurturenature documents',E'https://www.dropbox.com/scl/fo/ppxlhtyv4d72qz5qdsz2b/h?rlkey=kp03xmgu9s4al3mgvwp01r3ry&dl=0'),
(5,5,E'JewelVogue',E'www.jewelvogue.net',E'Cooperative',E'USA',E'1-10',E'Online search',E'No',E'',E'No',E'',E'2023-08-30',E'2023-08-30',1,E'Jewelry, Women`s accessories',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAbQ',E'/vendor-submitted-onboarding-docs/jewelvogue documents',E'https://www.dropbox.com/scl/fo/fkq6ovbxkg0aufmkulia0/h?rlkey=oc7z6qzcnazc7p9ped144os5o&dl=0'),
(6,6,E'GreenGrowth',E'www.greengrowthcoop.com',E'Cooperative',E'USA',E'11-25',E'Trade show',E'Yes',E'10% of profits fund local gardening initiatives.',E'Yes',E'Supporting community gardening programs.',E'2023-08-30',E'2023-08-30',4,E'Home Décor, Beauty + Wellness',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAcQ',E'/vendor-submitted-onboarding-docs/greengrowth documents',E'https://www.dropbox.com/scl/fo/dt0psdzo96b2xatevxsfy/h?rlkey=a6mnvzu2i74avzwooyi8ba083&dl=0'),
(7,7,E'TinyPaws',E'www.tinypaws.store',E'Non-Profit 501c3',E'USA',E'11-25',E'Online ad',E'No',E'',E'Yes',E'Supporting animal rescue organizations.',E'2023-08-30',E'2023-08-30',8,E'Pets',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAcg',E'/vendor-submitted-onboarding-docs/tinypaws documents',E'https://www.dropbox.com/scl/fo/i10ywpzkzqvy0u36x4ghb/h?rlkey=b4fozs0czw3ku4oil0yo6mr7i&dl=0'),
(8,8,E'FashionFusion',E'www.fashionfusion.co',E'B-corp',E'USA',E'51-100',E'Friend referral',E'Yes',E'15% of profits donated to sustainable fashion projects.',E'No',E'',E'2023-08-30',E'2023-08-30',6,E'Women`s apparel, Men`s apparel',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAcw',E'/vendor-submitted-onboarding-docs/fashionfusion documents',E'https://www.dropbox.com/scl/fo/a5qd9vfi25sfypsnboyy6/h?rlkey=feb039rjubp3vj83h19a6w19p&dl=0'),
(9,9,E'BrightBeginnings',E'www.brightbeginnings.org',E'Non-Profit 501c3',E'USA',E'1-10',E'Online search',E'Yes',E'100% funds support early childhood education.',E'Yes',E'Supporting quality preschool programs.',E'2023-08-30',E'2023-08-30',8,E'Kids Apparel',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAdA',E'/vendor-submitted-onboarding-docs/brightbeginnings documents',E'https://www.dropbox.com/scl/fo/vs7urlu11tonb7e35m10q/h?rlkey=k1wfab4nko85nzon83ts5tgyt&dl=0'),
(10,10,E'NatureGems',E'www.naturegemsjewels.com',E'LLC, S-corp, C-corp',E'USA',E'26-50',E'Social media',E'No',E'',E'No',E'',E'2023-08-30',E'2023-08-30',2,E'Jewelry',TRUE,E'id:9Qc6vgjHHB8AAAAAAAAAdQ',E'/vendor-submitted-onboarding-docs/naturegems documents',E'https://www.dropbox.com/scl/fo/aqlakhgpo3u0jtpg1psab/h?rlkey=47ip4i3vvyrbmvs220ph3p5a8&dl=0');



INSERT INTO "vendor_app_info" (
  brand_name, website_url, business_type, country, number_of_products,
  heard_about_us, giveback_selection, user_id, giveback_description,
  nonprofit_selection, nonprofit_description, selected_categories,
  date_created, date_edited, status_id
) VALUES
  ('EcoHome Creations', 'www.ecohomecreations.com', 'B-corp', 'USA', '11-25',
  'Friend referral', 'Yes', 1, '10% of profits go to local environmental NGOs.',
  'Yes', 'Supporting local environmental causes.', '1', '2023-08-30', '2023-08-30', 5),

  ('CharityThreads', 'www.cause-cart.com', 'Non-Profit 501c3', 'USA', '51-100',
  'Online ad', 'Yes', 2, '100% proceeds go to children`s education programs.',
  'Yes', 'Supporting underprivileged youth education.', '3', '2023-08-30', '2023-08-30', 3),

  ('PawPals', 'www.pawpals.com', 'LLC, S-corp, C-corp', 'USA', '26-50',
  'Social media', 'No but I want to learn more', 3, '',
  'No', '', '8', '2023-08-30', '2023-08-30', 2),

  ('NurtureNature', 'www.nurturenatureco.com', 'B-corp', 'USA', 'more than 100',
  'Trade show', 'Yes', 4, '5% of profits support reforestation projects.',
  'No', '', '1,7', '2023-08-30', '2023-08-30', 7),

  ('JewelVogue', 'www.google.com', 'Cooperative', 'USA', '1-10',
  'Online search', 'No', 5, '',
  'No', '', '2,9', '2023-08-30', '2023-08-30', 1),

  ('GreenGrowth', 'www.greengrowthcoop.com', 'Cooperative', 'USA', '11-25',
  'Trade show', 'Yes', 6, '10% of profits fund local gardening initiatives.',
  'Yes', 'Supporting community gardening programs.', '1,7', '2023-08-30', '2023-08-30', 4),

  ('TinyPaws', 'www.tinypaws.store', 'Non-Profit 501c3', 'USA', '11-25',
  'Online ad', 'No', 7, '',
  'Yes', 'Supporting animal rescue organizations.', '8', '2023-08-30', '2023-08-30', 8),

  ('FashionFusion', 'www.fashionfusion.co', 'B-corp', 'USA', '51-100',
  'Friend referral', 'Yes', 8, '15% of profits donated to sustainable fashion projects.',
  'No', '', '10,6', '2023-08-30', '2023-08-30', 6),

  ('BrightBeginnings', 'www.brightbeginnings.org', 'Non-Profit 501c3', 'USA', '1-10',
  'Online search', 'Yes', 9, '100% funds support early childhood education.',
  'Yes', 'Supporting quality preschool programs.', '3', '2023-08-30', '2023-08-30', 9),

  ('NatureGems', 'www.naturegemsjewels.com', 'LLC, S-corp, C-corp', 'USA', '26-50',
  'Social media', 'No', 10, '',
  'No', '', '2', '2023-08-30', '2023-08-30', 2);
