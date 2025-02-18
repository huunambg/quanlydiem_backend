const StudentModel = require("../model/student.model")



const addStudent = function (req, res) {
    let data = req.body
    try{
        StudentModel.insert(data, (err, result) => {
            if (err) {
                console.log(err);
                res.status(401).send({ message: "Add Student failure" })
            } else {
                res.send({ message: "Add Student success", data: data })
            }
        })
    }catch(e){
        res.status(502).send({ message: e })
    }
  
}

const getAllStudent = function (req, res) {
    StudentModel.getAll((err, result) => {
        if (err) {
            res.status(401).send({ message: "Get all Student Failure" })
        } else {
            res.send({ data: result, message: "Get all Student Success" })
        }
    })
}

const getOneStudent = function (req, res) {
    let id = req.params.id
    StudentModel.getOne(id, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get one Student Failure" })
        } else {
            res.send({ data: result, message: "Get one Student Success" })
        }
    })
}

const deleteStudent = function (req, res) {
    let id = req.params.id
    StudentModel.delete(id, (err, result) => {
        console.log(result);
        if (err) {
            res.status(401).send({ message: "Delete Student Failure" })
        } else if (result.affectedRows == 0) {
            res.status(401).send({ message: "Not found id Studente" })
        } else {
            res.send({ message: "Delete Student Success" })
        }
    })
}


const updateStudent = function (req, res) {
    let data = req.body
    StudentModel.update(data.student_id, data, (err, result) => {
        if (err) {
            console.log(err);

            res.status(401).send({ message: "Update Student Failure" })
        } else {
            res.send({ data: result, message: "Update Student Success" })
        }
    })
}


const getStudentByClass = function (req, res) {
    let classId = req.params.id
    StudentModel.getByClass(classId, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get Student by class Failure" })
        } else {
            res.send({ data: result, message: "Get Student by class Success" })
        }
    })
}



const StudentController = {
    addStudent, getAllStudent, getOneStudent, deleteStudent, updateStudent, getStudentByClass
}

module.exports = StudentController
