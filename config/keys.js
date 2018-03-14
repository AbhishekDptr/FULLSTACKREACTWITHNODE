//Switch between production and DEV env.
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  //in development mode
  module.exports = require("./dev");
}
