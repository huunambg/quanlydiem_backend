const SubjectModel = require("../model/subject.model")


const addSubject = function (req, res) {
    let data = req.body
    try {
        SubjectModel.insert(data, (err, result) => {
            if (err) {
                console.log(err);
                res.status(401).send({ message: "Add Subject failure" })
            } else {
                res.send({ message: "Add Subject success", data: data })
            }
        })
    } catch (e) {
        res.status(502).send({ message: e })
    }

}

const getAllSubject = function (req, res) {
    SubjectModel.getAll((err, result) => {
        if (err) {
            res.status(401).send({ message: "Get all Subject Failure" })
        } else {
            res.send({ data: result, message: "Get all Subject Success" })
        }
    })
}

const deleteSubject = function (req, res) {
    let id = req.params.id
    SubjectModel.delete(id, (err, result) => {
        console.log(result);
        if (err) {
            res.status(401).send({ message: "Delete Subject Failure" })
        } else if (result.affectedRows == 0) {
            res.status(401).send({ message: "Not found id Subjecte" })
        } else {
            res.send({ message: "Delete Subject Success" })
        }
    })
}

const updateSubject = function (req, res) {
    let data = req.body
    SubjectModel.update(data.subject_id, data, (err, result) => {
        if (err) {
            console.log(err);

            res.status(401).send({ message: "Update Subject Failure" })
        } else {
            res.send({ data: result, message: "Update Subject Success" })
        }
    })
}


// const getSubjectByClass = function (req, res) {
//     let classId = req.params.class_id
//     SubjectModel.getByClass(classId, (err, result) => {
//         if (err) {
//             res.status(401).send({ message: "Get Subject by class Failure" })
//         } else {
//             res.send({ data: result, message: "Get Subject by class Success" })
//         }
//     })
// }



const SubjectController = {
    addSubject, getAllSubject, deleteSubject, updateSubject,
}

module.exports = SubjectController
