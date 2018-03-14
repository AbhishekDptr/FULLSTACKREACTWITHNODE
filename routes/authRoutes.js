const passport = require("passport");

//THis kicks off oauth flow.Here when user goes to /auth/google
// Customer is prompted to google site and once he clicks ok
// google will return a code in the callback uri mentioned in the
// callbackURL so it'l lbe  /auth/google/callback?code=....

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //Once user confirms the access from google google returns a code and the
  //below route handler will allow passport to get the user details
  //once user accepts the callback function is called

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout(); // this is built in feature of passport
    res.send(req.user);
  });
};
