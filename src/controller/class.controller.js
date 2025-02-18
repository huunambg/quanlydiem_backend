const ClassModel = require("../model/class.model")


const addClass = function (req, res) {
    let data = req.body
    ClassModel.insert(data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(401).send({ message: "Add class failure" })
        } else {
            res.send({ message: "Add class success", data: data })
        }
    })
}
const getClassByTeacherId = function (req, res) {
    let id = req.params.id
    ClassModel.getClassByTeacherId(id, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get all class Failure" })
        } else {
            res.send({ data: result, message: "Get all class Success" })
        }
    })
}

const getAllClass = function (req, res) {
    ClassModel.getAll((err, result) => {
        if (err) {
            res.status(401).send({ message: "Get all class Failure" })
        } else {
            res.send({ data: result, message: "Get all class Success" })
        }
    })
}

const getOneClass = function (req, res) {
    let id = req.params.id
    ClassModel.getOne(id, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get one class Failure" })
        } else {
            res.send({ data: result, message: "Get one class Success" })
        }
    })
}
const deleteClass = function (req, res) {
    let id = req.params.id
    ClassModel.delete(id, (err, result) => {
        console.log(result);
        if (err) {
            res.status(401).send({ message: "Delete class Failure" })
        } else if (result.affectedRows == 0) {
            res.status(401).send({ message: "Not found id classe" })
        } else {
            res.send({ message: "Delete class Success" })
        }
    })
}


const updateClass = function (req, res) {
    let data = req.body
    ClassModel.update(data.class_id, data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(401).send({ message: "Update class Failure" })
        } else {
            res.send({ data: result, message: "Update class Success" })
        }
    })
}


const getClassByYear = function (req, res) {
    let year = req.params.year
    ClassModel.getByYear(year, (err, result) => {
        if (err) {
            res.status(401).send({ message: "Get class by year Failure" })
        } else {
            res.send({ data: result, message: "Get class by year Success" })
        }
    })
}



const ClassController = {
    addClass, getAllClass, getOneClass, deleteClass, updateClass, getClassByYear,getClassByTeacherId
}

module.exports = ClassController
