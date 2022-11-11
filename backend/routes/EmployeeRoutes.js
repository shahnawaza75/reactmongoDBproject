const express = require("express");
const {
  CreateEmployee,
  FindEmployeeList,
  deleteEmployee,
  getDetailsOfEmployee,
  updateDetailsOfEmployee,
} = require("../controllers/createEmployee");
const router = express();

router.route("/create").post(CreateEmployee);
router.route("/all").get(FindEmployeeList);
router
  .route("/:id")
  .put(deleteEmployee)
  .get(getDetailsOfEmployee)
  .post(updateDetailsOfEmployee);

module.exports = router;
