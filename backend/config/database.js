const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDatabase = () => {
  try {
    mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(`mongodb connected with server : ${data?.connection.host}`);
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDatabase;
