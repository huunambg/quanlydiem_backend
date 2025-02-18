const GradeModel = require("../model/grade.model")


const addGrade = function (req, res) {
    let data = req.body
    try {
        GradeModel.insert(data, (err, result) => {
            if (err) {
                console.log(err);
                res.status(401).send({ message: "Add Grade failure" })
            } else {
                res.send({ message: "Add Grade success", data: data })
            }
        })
    } catch (e) {
        res.status(502).send({ message: e })
    }

}


const getAllGrade = function (req, res) {
    GradeModel.getAll((err, result) => {
        if (err) {
            res.status(401).send({ message: "Get all Grade Failure" })
        } else {
            res.send({ data: result, message: "Get all Grade Success" })
        }
    })
}
const getAllSubjectByStudent = function (req, res) {
    let id = req.params.id
    GradeModel.getAllSubjectByStudent(id, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get  Grade Failure" })
        } else {
            res.send({ data: result, message: "Get  Grade Success" })
        }
    })
}

const getAllGradeSubjectClass = function (req, res) {
    let data = req.body
    GradeModel.getByClassAndSubject(data.class_id, data.subject_id, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get  Grade Failure" })
        } else {
            res.send({ data: result, message: "Get  Grade Success" })
        }
    })
}


const getAllSubjectByClassStudent = function (req, res) {
    let data = req.body
    GradeModel.getByClassAndStudent(data.class_id, data.student_id, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get  Grade Failure" })
        } else {
            res.send({ data: result, message: "Get  Grade Success" })
        }
    })
}

const getAllByClassSummary = function (req, res) {
    let id = req.params.id
    GradeModel.getByClassSumary(id, (err, result) => {
        if (err) {
            console.log(err)  
            res.status(401).send({ message: "Get  Grade Failure" })
        } else {
            res.send({ data: result, message: "Get  Grade Success" })
        }
    })
}

const getGradeByStudentAcademicYear = function (req, res) {
    let data = req.body
    GradeModel.getByStudentAcademicYear(data.student_id, data.academic_year, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get all Grade Failure" })
        } else {
            res.send({ data: result, message: "Get all Grade Success" })
        }
    })
}



const deleteGrade = function (req, res) {
    let id = req.params.id
    GradeModel.delete(id, (err, result) => {
        console.log(result);
        if (err) {
            res.status(401).send({ message: "Delete Grade Failure" })
        } else if (result.affectedRows == 0) {
            res.status(401).send({ message: "Not found id Gradee" })
        } else {
            res.send({ message: "Delete Grade Success" })
        }
    })
}

const updateGrade = function (req, res) {
    let data = req.body
    GradeModel.update(data.grade_id, data, (err, result) => {
        if (err) {
            console.log(err);

            res.status(401).send({ message: "Update Grade Failure" })
        } else {
            console.log(result);
            res.send({ data: result, message: "Update Grade Success" })
        }
    })
}


// const getGradeByClass = function (req, res) {
//     let classId = req.params.class_id
//     GradeModel.getByClass(classId, (err, result) => {
//         if (err) {
//             res.status(401).send({ message: "Get Grade by class Failure" })
//         } else {
//             res.send({ data: result, message: "Get Grade by class Success" })
//         }
//     })
// }



const GradeController = {
    addGrade, getAllGrade, deleteGrade, updateGrade, getGradeByStudentAcademicYear, getAllSubjectByStudent, getAllSubjectByClassStudent, getAllGradeSubjectClass, getAllByClassSummary
}

module.exports = GradeController
