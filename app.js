const { express, application } = require('express');
const { Session } = require('express-session');
const mongoose = require('mongoose');

const app = express();
app.use(Session)