const express = require("express");
const parser = require("body-parser");
const employeeRouter = require("./routes/EmployeeRoutes");
const connectDatabase = require("./config/database");
const app = express();

app.set(parser.urlencoded({ extended: false }));
app.use(express.json());
connectDatabase();

app.use("/employee", employeeRouter);

module.exports = app;
