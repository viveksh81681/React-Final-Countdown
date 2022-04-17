const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://vivek81681:12345@cluster1.djake.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  );
};