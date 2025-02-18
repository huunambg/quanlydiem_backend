const express = require('express')
const router = express.Router()
const AssignmentController = require("../controller/assignment.controller")
router.post("/add-assignment", AssignmentController.addAssignment)
router.get("/get-all-assignment", AssignmentController.getAllAssignment)
// router.get("/get-assignment-by-class/:class", AssignmentController.ge)
router.put("/update-assignment", AssignmentController.updateAssignment)
router.delete("/delete-assignment/:id", AssignmentController.deleteAssignment)
module.exports = router
