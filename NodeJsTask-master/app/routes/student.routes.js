module.exports = app => {
    const students = require("../controllers/student.controller.js");
  
    // Create new Student
    app.post("/api/v1/students", students.create);
  
    // Retrieve all Students
    app.get("/api/v1/students", students.findAll);
  
    // Retrieve one single Student with studentId
    app.get("/api/v1/students/:studentId", students.findOne);
  
    // Update a Student with studentId
    app.put("/api/v1/students/:studentId", students.update);
  
    // Delete a Student with studentId
    app.delete("/api/v1/students/:studentId", students.delete);
  
    // // Delete all Student
    // app.delete("/students", students.deleteAll);
  };