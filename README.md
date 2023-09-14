![Static Badge](https://img.shields.io/badge/repo_size-11.38_mB-%23ffe4d2)
![Static Badge](https://img.shields.io/badge/javascript-97.2%25-%23ced8ce)

# Cause-Cart: Onboarding a New Vendor

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
    

## Description

This web application is the initial step for an artist, non-profit organization, or altruistic for-profit business to sell their products on the Cause-Cart marketplace. Two user groups and views are supported: vendor and administrator. A prospective vendor first fills out a registration form, ensuring only relevant data is collected. A Cause-Cart administrator can review this data and determine whether the vendor offers socially and environmentally responsible products, donates a percentage of their profits, and/or partners with a non-profit. The rest of the onboarding steps are completed through document sharing via Dropbox API, real-time updates on the application's progress, and email communication.

## Built With

<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
<a href="https://www.figma.com/?fuid="><img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" height="40px" width="40px" /></a>


## Getting Started

The project should be compatible with your favorite integrated development environment (IDE). This was built using [Visual Studio Code](https://code.visualstudio.com/). 

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Dropbox App Console](https://www.dropbox.com/developers/apps)
- [Postman](https://www.postman.com/)

### Installation

1. Fork the repository
2. Copy the SSH key to your newly created repository
3. In your terminal, type: `git clone {paste SSH link}`
4. Navigate to the repository folder in your terminal
5. Open VS Code (or the editor of your choice) and open the folder
6. In the VS Code terminal, run `npm install` to install all dependencies
7. Create a `.env` file at the root of the project and paste the following lines into the file:
  ```
  SERVER_SESSION_SECRET="superDuperSecret"
  ```
In your new `.env` file, replace `superDuperSecret` with a long random string to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
```
DROPBOX_APP_KEY="yourDropboxAppKey"
DROPBOX_SECRET="yourDropboxSecret"
DROPBOX_REFRESH_TOKEN="yourDropboxRefreshToken"
```
The `.env` file should also be updated to include information specific to your Dropbox API. Detailed instructions are included in the Handoff Document.
  
8. Create a database named `cause_cart` in PostgreSQL. If you want to name your database something else, you will need to change `cause_cart` to the name of your new database name in `server/modules/pool.js`
9. The queries in the database.sql file are set up to create all the necessary tables. Copy and paste those queries into the SQL query of the database.
10. Run `npm run server` in your VS Code terminal
11. Open a second terminal and run `npm run client`

## Usage

After everything is installed and running, it should open automatically in your default browser. If not, navigate to: http://localhost:3000/#/.

A video walkthrough of how to use the application: [Cause-Cart Vendor Onboarding Demo](https://youtu.be/LE2Fak6mUV8?si=-zTw8twc9h9edGko).

## Deployment

- Login Credentials for Heroku are provided in the Handoff Document.
- If you wish to make any changes to the deployed app, you must login, visit the cause-cart section, select the deploy tab, and manually deploy the app. On the same page, you can reconfigure it to redeploy automatically if you wish.
- Environment variables are kept on Heroku in the Settings tab, click the Reveal Config Vars button
- To set up the database, we used Postico to plug the information from Heroku into a new favorite. This information can be found in the Resources tab by clicking the Postgres add-on. After that, you will be taken to a new page where you can view your credentials under the settings tab.
- If you'd like to create new users (which can also be used to change a password), you must:

1. Go into the user router
2. Uncomment the route
3. Push changes and redeploy app
4. Register User
5. Comment out the route back in VS Code
6. Push changes
7. Redeploy
