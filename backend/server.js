const dotenv = require("dotenv");
const app = require("./app.js");

dotenv.config({ path: "./config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
  console.log(`App is running on Port ${process.env.PORT}`);
});
