const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String
});

//To create model.
mongoose.model("Users", UserSchema);
