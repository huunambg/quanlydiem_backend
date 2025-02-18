const db = require("../common/connect")

const SubjectModel = function () {
}

SubjectModel.insert = function (data, result) {
    let sql = "INSERT INTO subject SET ?"
    db.query(sql, data, function (err, res) {
        result(err, res)
    })
}

// SubjectModel.getByClass = function (classId, result) {
//     let sql = `SELECT * FROM subject  WHERE class_id = '${classId}'`
//     db.query(sql, function (err, res) {
//         result(err, res)
//     })
// }
// SubjectModel.getByClassYear = function (academicYear, result) {
//     let sql = `SELECT * FROM subject  WHERE class_id = '${academicYear}'`
//     db.query(sql, function (err, res) {
//         result(err, res)
//     })
// }


SubjectModel.getAll = function ( result) {
    let sql = `SELECT * FROM subject`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}


SubjectModel.delete = function (subjectId, result) {
    let sql = `Delete FROM subject WHERE subject_id = '${subjectId}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}

SubjectModel.update = function (subjectId, data, result) {
    let sql = `UPDATE subject SET ? WHERE subject_id = '${subjectId}'`
    db.query(sql, data, function (err, res) {
        result(err, data)
    })
}

module.exports = SubjectModel