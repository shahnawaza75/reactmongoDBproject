const express = require("express");
const {
  CreateEmployee,
  FindEmployeeList,
} = require("../controllers/createEmployee");
const router = express();

router.post("/create", CreateEmployee);
router.post("/all", FindEmployeeList);

module.exports = router;
