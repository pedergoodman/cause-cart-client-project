const axios = require('axios');
const { Dropbox } = require('dropbox');
require('dotenv').config();
const express = require('express');

const tokenEndpoint = 'https://api.dropboxapi.com/oauth2/token';
const redirectUri = 'http://localhost:3000/auth'


// Dropbox configuration
const config = {
    clientId: process.env.DROPBOX_APP_KEY,
    clientSecret: process.env.DROPBOX_SECRET,
    refreshToken: process.env.DROPBOX_REFRESH_TOKEN,
};

const dbx = new Dropbox(config); // Replace with your access token


module.exports = dbx;