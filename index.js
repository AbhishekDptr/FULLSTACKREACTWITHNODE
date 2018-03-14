const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/User"); // for mongoose to work
require("./services/passport"); //this will just load up the passport js file
//since mongoose is needed inside passport we need to ensure the order of require statements is same.
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

const app = express();

//to enable cookie support in express we need cookie session

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30days in ms
    keys: [keys.cookieKey] //encrypt the cookie with this key
  })
);
//telling passport to use cookie authentication
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);

// maps the app object to its routes inside authRoutes
authRoutes(app);
// this can be short handed into this
//require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
