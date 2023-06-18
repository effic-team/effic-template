let router = require("effic").Router()
let { mysql } = require("effic").Mount("config")
const { home } = require("../config/doc")


let routers = [
    require("./users"),
]

let res = router.install({
    name: "用户端",
    router: routers,
    home: home,
})

module.exports = res

