// 挂载错误响应函数
const sendError = (req, res, next) => {
    res.$sendErr = (message, state) => {
        let data = {
            state: state || 500,
            message: message,
        };
        res.status(state || 500);
        res.send(data);
    };
    next();
};

// 挂载成功响应函数
const sendSuccess = (req, res, next) => {
    res.$send = (config) => {
        let data = {
            state: config.state || 200,
            data: config.data,
            message: config.message || "请求成功",
        };
        res.status(data.state || 200);
        res.send(data);
    };
    next();
};

module.exports = [sendError, sendSuccess]



