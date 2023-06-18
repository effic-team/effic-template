let { body, use, validateGroup } = require("effic").Validator()


// 登录校验器
exports.userLogin = validateGroup([
    use(({ query, res, next }) => {
        console.log("校验中间件")
        next()
    }),
    body("accountNumber", "[Number,String]", "账号"),
    body("password", "[Number,String]", "密码")
])

