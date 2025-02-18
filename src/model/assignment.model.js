const db = require("../common/connect")


const AssignmentModel = function () {
}

AssignmentModel.insert = function (data, result) {
    let sql = "INSERT INTO assignment SET ?"
    db.query(sql, data, function (err, res) {
        result(err, res)
    })
}


// AssignmentModel.getByClass = function (classId, result) {
//     let sql = `SELECT * FROM assignment  WHERE class_id = '${classId}'`
//     db.query(sql, function (err, res) {
//         result(err, res)
//     })
// }
// AssignmentModel.getByClassYear = function (academicYear, result) {
//     let sql = `SELECT * FROM assignment  WHERE class_id = '${academicYear}'`
//     db.query(sql, function (err, res) {
//         result(err, res)
//     })
// }





AssignmentModel.getAll = function ( result) {
    let sql = `SELECT * FROM assignment`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}


AssignmentModel.delete = function (assignmentId, result) {
    let sql = `Delete FROM assignment WHERE assignment_id = '${assignmentId}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}

AssignmentModel.update = function (assignmentId, data, result) {
    let sql = `UPDATE assignment SET ? WHERE assignment_id = '${assignmentId}'`
    db.query(sql, data, function (err, res) {
        result(err, data)
    })
}

module.exports = AssignmentModel