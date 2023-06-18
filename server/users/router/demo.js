const router = require("effic").Router()
const controller = require("../controller/demo")
const validator = require("../validator/demo")

router.get({
    name: "登录",
    url: "/userLogin",
    validator: validator.userLogin,
    controller: controller.userLogin,
})

module.exports = router