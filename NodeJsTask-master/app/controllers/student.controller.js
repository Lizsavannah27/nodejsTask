const Student = require("../models/student.model.js");


exports.create = (req, res) => {
    
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Student
  const student = new Student({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });

  // Save Student in database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || " Error occurred while creating the Student."
      });
    else res.send(data);
  });
  
};

// Retrieve all Students from database.
exports.findAll = (req, res) => {
    Student.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || " Error occurred while retrieving students."
          });
        else res.send(data);
      });
  
};

// Find single Student with a studentId
exports.findOne = (req, res) => {
    Student.findById(req.params.studentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Student with id ${req.params.studentId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Student with id " + req.params.studentId
            });
          }
        } else res.send(data);
      });
  
};

// Update  Student identified by the studentId in the request
exports.update = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  Student.updateById(
    req.params.studentId,
    new Student(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Student with id ${req.params.studentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Student with id " + req.params.studentId
          });
        }
      } else res.send(data);
    }
  );
  
};

// Delete a Student with the specified studentId in the request
exports.delete = (req, res) => {
    Student.remove(req.params.studentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Student with id ${req.params.studentId}.`
            });
          } else {
            res.status(500).send({
              message: "Could'nt delete Student with id " + req.params.studentId
            });
          }
        } else res.send({ message: `Student deleted successfully!` });
      });
  
};

// // // Delete all of the  Students from the database.
// // exports.deleteAll = (req, res) => {
//     Student.removeAll((err, data) => {
//         if (err)
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all students."
//           });
//         else res.send({ message: `All Students  deleted successfully!` });
//       });
  
// // };