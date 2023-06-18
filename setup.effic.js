const common = require("./common")

let config = {
    // 是否开启文档
    doc: true,
    mount: ["config"],
    // 控制器配置
    controller: {
        error({ err, res }) {
            res.$sendErr(err)
        },
        // 混入器
        mixins: {
            ...common
        },
    },
    // 校验器配置
    validator: {
        validateGroup({ res, next, validateResult }) {
            let result = validateResult()
            if (result[0]) {
                res.$sendErr(result[0].message[0], 400)
            } else {
                next()
            }
        },
    },
}

module.exports = config