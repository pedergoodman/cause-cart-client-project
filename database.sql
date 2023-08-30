-- Create user_table
CREATE TABLE user_table (
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
);