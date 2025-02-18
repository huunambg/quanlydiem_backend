const AuthModel = require("../model/auth.model")
const JWT = require("../auth/tokenhandle")

const register = function (req, res) {
    let data = req.body
    AuthModel.insert(data, function (result) {
        if (result == "Fail") {
            res.status(502).send({ message: "Error Server" })
        } else if (result == "Email_already_exists") {
            res.status(401).send({ message: "Email already exists" })
        } else {
            res.send({ data: { email: data.email, password: data.password, Auth_id: result }, message: "Create User complete" })
        }
    })

}

const login = function (req, res) {
    let user = req.body
    AuthModel.getOne(user, async function (result) {
        if (result != "Fail") {
            let data = {
                user_id: result.user_id,
                email: result.email,
                password: result.password,
            }
            let token = await JWT.make_token(data)
            res.send({ data: result, token: token, message: "Login complete" })
        } else {
            res.status(401).send({ message: "Đăng nhập thất bại tài khoản hoặc mật khẩu không chính xác." })
        }
    })
}


const getAllTeacher = function (req, res) {
    AuthModel.getAllTeacher(function (err, data) {
        if (err) {
            res.status(402).send({ message: "Get all teacher fail" })
        } else {
            res.send({ data: data })
        }

    })
}


const getUserWithFilter = function (req, res) {
    let search = req.params.search
    AuthModel.getWithFilter(search, function (result) {
        if (result != "Fail") {
            res.send({ data: result })
        }
    })

}

const updateUser = function (req, res) {
    let Auth = req.body
    let Auth_id = req.params.Auth_id
    AuthModel.update(Auth_id, Auth, function (result) {
        if (result != "Fail") {
            res.send({ data: result, message: "Cập nhật thông tin thành công" })
        } else {
            res.send({ data: result, message: "Cập nhật thông tin thất bại" })
        }
    })

}

const AuthController = {
    register,
    login,
    updateUser,
    getUserWithFilter,getAllTeacher
}

module.exports = AuthController
