const db = require("../common/connect")


const StudentModel = function () {
}

StudentModel.insert = function (data, result) {
    let sql = "INSERT INTO student SET ?"
    db.query(sql, data, function (err, res) {
        result(err, res)
    })
}


StudentModel.getByClass = function (classId, result) {
    let sql = `SELECT * FROM student WHERE class_id = '${classId}'`
    db.query(sql, function (err, res) {
        console.log(classId);
        result(err, res)
    })
}



// StudentModel.getByClassYear = function (academicYear, result) {
//     let sql = `SELECT * FROM student  WHERE class_id = '${academicYear}'`
//     db.query(sql, function (err, res) {
//         result(err, res)
//     })
// }


StudentModel.getAll = function ( result) {
    let sql = `SELECT * FROM student`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}


StudentModel.getOne = function (studentID, result) {
    let sql = `SELECT * FROM student  WHERE student_id = '${studentID}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}



StudentModel.delete = function (studentId, result) {
    let sql = `Delete FROM student WHERE student_id = '${studentId}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}

StudentModel.update = function (studentId, data, result) {
    let sql = `UPDATE student SET ? WHERE student_id = '${studentId}'`
    db.query(sql, data, function (err, res) {
        result(err, data)
    })
}

module.exports = StudentModel