const dotenv = require("dotenv");
const app = require("./app.js");

dotenv.config({ path: "./config/config.env" });

app.listen(process.env.port, () => {
  console.log(`App is running on Port ${process.env.PORT}`);
});
