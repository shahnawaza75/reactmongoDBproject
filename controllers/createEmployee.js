const Employee = require("../models/EmployeeModel.js");
//create a employee
exports.CreateEmployee = async (req, res) => {
  const employee = Employee.create(req?.body);
  res.status(200).json({ messae: "Employee Created", employee_Info: employee });
};

//find all employees

exports.FindEmployeeList = async (req, res) => {
  const employee = await Employee.find();
  res.status(200).json({ messae: "Employee List", employee_Info: employee });
};
