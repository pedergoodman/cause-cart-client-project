-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE user_table (
    id SERIAL PRIMARY KEY,
    email VARCHAR(1000),
    password VARCHAR(1000),
    authorization_level INTEGER
);

CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    status VARCHAR(500)
);

CREATE TABLE category_names (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
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
);