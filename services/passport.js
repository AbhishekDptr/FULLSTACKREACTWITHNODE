const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("Users");

//to save data from user we need to serialize it and send it as cookie

//Serialize data to be stored as cookie
passport.serializeUser((user, done) => {
  done(null, user.id); //this is the mongo generated unique id .
  //We are not using googleId bcoz we can have multiple oauth providers so mongo's id is the best way to go
});

//deserialize is to get data from the cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//tells passport to use GoogleStrategy
//ensure that your keys end with ID and not Id or id
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true // in prod since heroku uses a proxy redirection happens on http and not https
      //to tell google to trust request coming from a proxy we need to set proxy to true
    },
    //This is called after user is authenticated
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //already user exists
          // we need to tell passport we are done fro this operation
          done(null, existingUser); // first arg is  error So since user already exists we dont have any error
        } else {
          //create new user .save is needed to create the record in DB
          new User({ googleId: profile.id })
            .save() //returns a promise so need to chain with then
            .then(user => done(null, user));
        }
      });
    }
  )
);

module.exports;
