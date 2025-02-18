const AssignmentModel = require("../model/assignment.model")


const addAssignment = function (req, res) {
    let data = req.body
    try{
        AssignmentModel.insert(data, (err, result) => {
            if (err) {
                console.log(err);
                res.status(401).send({ message: "Add Assignment failure" })
            } else {
                res.send({ message: "Add Assignment success", data: data })
            }
        })
    }catch(e){
        res.status(502).send({ message: e })
    }
  
}

const getAllAssignment = function (req, res) {
    AssignmentModel.getAll((err, result) => {
        if (err) {
            res.status(401).send({ message: "Get all Assignment Failure" })
        } else {
            res.send({ data: result, message: "Get all Assignment Success" })
        }
    })
}

const deleteAssignment = function (req, res) {
    let id = req.params.id
    AssignmentModel.delete(id, (err, result) => {
        console.log(result);
        if (err) {
            res.status(401).send({ message: "Delete Assignment Failure" })
        } else if (result.affectedRows == 0) {
            res.status(401).send({ message: "Not found id Assignmente" })
        } else {
            res.send({ message: "Delete Assignment Success" })
        }
    })
}

const updateAssignment = function (req, res) {
    let data = req.body
    AssignmentModel.update(data.assignment_id, data, (err, result) => {
        if (err) {
            console.log(err);

            res.status(401).send({ message: "Update Assignment Failure" })
        } else {
            res.send({ data: result, message: "Update Assignment Success" })
        }
    })
}


// const getAssignmentByClass = function (req, res) {
//     let classId = req.params.class_id
//     AssignmentModel.getByClass(classId, (err, result) => {
//         if (err) {
//             res.status(401).send({ message: "Get Assignment by class Failure" })
//         } else {
//             res.send({ data: result, message: "Get Assignment by class Success" })
//         }
//     })
// }



const AssignmentController = {
    addAssignment, getAllAssignment, deleteAssignment, updateAssignment, 
}

module.exports = AssignmentController
