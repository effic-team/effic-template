
const controller = require("effic").Controller()

// 登录
exports.userLogin = controller(async function ({ req, res, next }) {

    res.$send({
        data: {
            token: "token",
            userInfo: {
                nickname: "effic"
            }
        }
    })

}).return({
    token: "用户Token",
    userInfo: ["用户信息",
        {
            nickname: '昵称',
        }
    ],
})
