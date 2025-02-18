const db = require("../common/connect")


const ClassModel = function () {
}

ClassModel.insert = function (data, result) {
    let sql = "INSERT INTO class SET ?"
    db.query(sql, data, function (err, res) {
        result(err, res)
    })
}


ClassModel.getByYear = function (academicYear, result) {
    let sql = `SELECT * FROM class  WHERE academic_year = '${academicYear}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}
ClassModel.getClassByTeacherId = function (teacherId, result) {
    let sql = `SELECT * FROM class WHERE teacher_id = '${teacherId}' and status ='1' `
    db.query(sql, function (err, res) {
        result(err, res)
    })
}


ClassModel.getAll = function (result) {
    let sql = `SELECT * FROM class`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}


ClassModel.getOne = function (classID, result) {
    let sql = `SELECT * FROM class  WHERE class_id = '${classID}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}



ClassModel.delete = function (classId, result) {
    let sql = `Delete FROM class WHERE class_id = '${classId}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}

ClassModel.update = function (classId, data, result) {
    let sql = `UPDATE class SET ? WHERE class_id = '${classId}'`
    db.query(sql, data, function (err, res) {
        result(err, data)
    })
}

module.exports = ClassModel