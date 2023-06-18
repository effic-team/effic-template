// 错误捕获
const error = require("./error");
// 统一数据响应格式
const send = require("./send");

// 前置中间件
exports.useBefore = (app) => {
    app.use(send);
};

// 后置中间件
exports.useAfter = (app) => {
    app.use(error);
};

