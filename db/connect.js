const mongoose = require("mongoose");
// const connectionString =
//   "";

const connectDB = (url) => {
  return mongoose.connect(
    //connectionString,
    url,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      //used to remove the deprecation warnings
    }
  );
};

module.exports = connectDB;
