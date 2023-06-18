const router = require("effic").Router()
const controller = require("../controller/login")
const validator = require("../validator/login")

router.get({
    name: "登录",
    url: "/userLogin",
    validator: validator.userLogin,
    controller: controller.userLogin,
})

module.exports = router