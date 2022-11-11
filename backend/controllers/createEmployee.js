const Employee = require("../models/EmployeeModel.js");
//create a employee
exports.CreateEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req?.body);
    res
      .status(200)
      .json({ messae: "Employee Created", employee_Info: employee });
  } catch (err) {
    res.send(err.message);
  }
};

//find all employees

exports.FindEmployeeList = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json({ messae: "Employee List", employee_Info: employee });
  } catch (err) {
    res.send(err.message);
  }
};

//delete employee by id
exports.deleteEmployee = async (req, res) => {
  try {
    if (req?.params?.id) {
      const id = req?.params?.id;
      const employee = await Employee.findByIdAndDelete(id);
      res.status(200).json({
        message: "Employee delete successfully",
        employee: employee,
        success: true,
      });
    } else {
      res.status(400).json({
        message: "Employee id not found",
        success: false,
      });
    }
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

//get the data with by using employee id
exports.getDetailsOfEmployee = async (req, res) => {
  try {
    if (req?.params?.id) {
      const id = req.params?.id;
      const employee = await Employee.findById(id);
      res.status(200).json({
        message: "Employee found",
        success: true,
        employee: employee,
      });
    } else {
      res.status(400).json({
        message: "Employee not found",
        sucsess: false,
      });
    }
  } catch (err) {
    res.statuys(503).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//update the empoloyee by using employee id
exports.updateDetailsOfEmployee = async (req, res) => {
  try {
    if (req?.params?.id) {
      const id = req.params?.id;
      const employee = await Employee.findByIdAndUpdate(id, req?.body, {
        new: true,
      });
      res.status(200).json({
        message: "Employee updated",
        success: true,
        employee: employee,
      });
    } else {
      res.status(400).json({
        message: "Employee not found",
        sucsess: false,
      });
    }
  } catch (err) {
    res.status(503).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
