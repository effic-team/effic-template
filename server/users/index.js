const { Router } = require("effic")
const router = Router()
const login = require("./router/login")

router.use("用户管理", "/admin/users", [
    login
])


module.exports = router

