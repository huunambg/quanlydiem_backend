const db = require("../common/connect")


const GradeModel = function () {
}

GradeModel.insert = function (data, result) {
    let sql = "INSERT INTO grade SET ?"
    db.query(sql, data, function (err, res) {
        result(err, res)
    })
}

GradeModel.getByClassAndSubject = function (classId, subjectId, result) {
    let sql = `
        SELECT grade.*, student.full_name AS full_name,student.date_of_birth AS date_of_birth
        FROM grade
        JOIN student ON grade.student_id = student.student_id
        WHERE grade.class_id = '${classId}' AND grade.subject_id = '${subjectId}'
    `;
    db.query(sql, function (err, res) {
        console.log(err);

        result(err, res);
    });
};

// GradeModel.getByStudentAcademicYear = function (studentId, academicYear, result) {
//     let sql = `SELECT * FROM grade  WHERE student_id = '${studentId}' and academic_year = '${academicYear}'`
//     db.query(sql, function (err, res) {
//         result(err, res)
//     })
// }

GradeModel.getByStudentAcademicYear = function (studentId, academicYear, result) {
    let sql = `
        SELECT subject_id,
               AVG(oral_score * 0.1 + score_15_minutes * 0.2 + score_1_hour * 0.3 + final_score * 0.4) AS annual_average
        FROM grade
        WHERE student_id = ? AND academic_year = ?
        GROUP BY subject_id
    `;

    db.query(sql, [studentId, academicYear], function (err, res) {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        // Trả về kết quả
        result(null, res);
    });
}



GradeModel.getByClassAndStudent = function (classId, studentId, result) {
    let sql = `SELECT * FROM grade  WHERE class_id = '${classId}' and student_id = '${studentId}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}



GradeModel.getByClassSumary = function (classId, result) {
    let sql = `
        SELECT 
            student.full_name AS "full_name",
            student.hk1 AS "hk1",
             student.hk2 AS "hk2",
            grade.semester AS "semester" ,
            MAX(CASE WHEN subject.subject_name = 'Toán học' THEN grade.dtb_mhk END) AS "Toán học",
            MAX(CASE WHEN subject.subject_name = 'Vật lí' THEN grade.dtb_mhk END) AS "Vật lí",
            MAX(CASE WHEN subject.subject_name = 'Hóa học' THEN grade.dtb_mhk END) AS "Hóa học",
            MAX(CASE WHEN subject.subject_name = 'Sinh học' THEN grade.dtb_mhk END) AS "Sinh học",
            MAX(CASE WHEN subject.subject_name = 'Tin học' THEN grade.dtb_mhk END) AS "Tin học",
            MAX(CASE WHEN subject.subject_name = 'Ngữ văn' THEN grade.dtb_mhk END) AS "Ngữ văn",
            MAX(CASE WHEN subject.subject_name = 'Lịch sử' THEN grade.dtb_mhk END) AS "Lịch sử",
            MAX(CASE WHEN subject.subject_name = 'Địa lí' THEN grade.dtb_mhk END) AS "Địa lí",
            MAX(CASE WHEN subject.subject_name = 'Tiếng anh' THEN grade.dtb_mhk END) AS "Tiếng anh",
            MAX(CASE WHEN subject.subject_name = 'GDCD' THEN grade.dtb_mhk END) AS "GDCD",
            MAX(CASE WHEN subject.subject_name = 'Công nghệ' THEN grade.dtb_mhk END) AS "Công nghệ",
            MAX(CASE WHEN subject.subject_name = 'Thể dục' THEN grade.dtb_mhk END) AS "Thể dục",
            MAX(CASE WHEN subject.subject_name = 'GDQP' THEN grade.dtb_mhk END) AS "GDQP",
            AVG(grade.dtb_mhk) AS "TBcmlhkl"
        FROM grade
        INNER JOIN student ON student.student_id = grade.student_id
        INNER JOIN subject ON subject.subject_id = grade.subject_id
        WHERE grade.class_id = ?
        GROUP BY student.full_name`;

    db.query(sql, [classId], function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};




// GradeModel.getByClassYear = function (academicYear, result) {
//     let sql = `SELECT * FROM grade  WHERE class_id = '${academicYear}'`
//     db.query(sql, function (err, res) {
//         result(err, res)
//     })
// }
GradeModel.getAllSubjectByStudent = function (studentId, result) {
    let sql1 = `SELECT * FROM grade  WHERE student_id = '${studentId}'`


    db.query(sql1, function (err, res) {
        result(err, res)

    })
}

GradeModel.getAll = function (result) {
    let sql = `SELECT * FROM grade`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}




GradeModel.getOne = function (gradeID, result) {
    let sql = `SELECT * FROM grade  WHERE grade_id = '${gradeID}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}



GradeModel.delete = function (gradeId, result) {
    let sql = `Delete FROM grade WHERE grade_id = '${gradeId}'`
    db.query(sql, function (err, res) {
        result(err, res)
    })
}

GradeModel.update = function (gradeId, data, result) {
    let sql = `UPDATE grade SET ? WHERE grade_id = '${gradeId}'`
    db.query(sql, data, function (err, res) {
        result(err, data)
    })
}

module.exports = GradeModel