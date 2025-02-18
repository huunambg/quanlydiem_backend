const express = require('express')
const router = express.Router()
const SubjectController = require("../controller/subject.controller")
router.post("/add-subject", SubjectController.addSubject)
router.get("/get-all-subject", SubjectController.getAllSubject)
// router.get("/get-subject-by-class/:class", SubjectController.ge)
router.put("/update-subject", SubjectController.updateSubject)
router.delete("/delete-subject/:id", SubjectController.deleteSubject)
module.exports = router
