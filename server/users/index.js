const router = require("effic").Router()
const demo = require("./router/demo")

router.use("用户管理", "/admin/users", [
    demo
])


module.exports = router

