const db = require("../common/connect")


const AuthModel = function () {
    // this.user_id = p.user_id
    // this.username = p.username
    // this.password = p.password
    // this.email = p.email
    // this.phone_number = p.phone_number
    // this.role = p.role
}




AuthModel.insert = function (data, result) {

    let sql_check_email = `SELECT user .* FROM user WHERE email ='${data.email}'`
    let sql = "INSERT INTO user SET ?"
    try {

        db.query(sql_check_email, function (err, data_email) {
            if (err) {
                result("Fail")
            } else if (data_email.length > 0) {
                result("Email_already_exists")
            }
            else {
                db.query(sql, data, function (err, res_insert) {
                    if (err) {
                        console.log(err);
                        result("Fail")
                    }
                    else {
                        result(res_insert.insertId)
                    }

                })
            }



        })
    } catch (e) {
        console.log(e);
    }
}



AuthModel.getOne = function (user, result) {

    let sql = `SELECT * FROM user  WHERE email = '${user.email}' and password = '${user.password}'`

    db.query(sql, function (err, data) {
        if (err) {
            result("Fail")
        }
        else if (data.length == 0) {
            result("Fail")
        }
        else {
            result(data[0])
        }


    })
}



AuthModel.getAllTeacher = function (result) {

    let sql = `SELECT user.user_id, user.full_name, user.email, user.phone_number FROM user WHERE role = 'teacher'`

    db.query(sql, function (err, data) {
        console.log(err);

        result(err, data)
    })
}


AuthModel.update = function (user_id, user, result) {
    let sql = `UPDATE user SET ?  WHERE user_id = '${user_id}'`
    db.query(sql, user, function (err, data) {
        if (err) {
            result("Fail")
        }
        else {
            result(data)
        }
    })
}

module.exports = AuthModel