const { format } = require('util')

// 监听404
const routeError = (req, res, next) => {
    let path = req.path
    res.status(404).send({
        state: 404,
        message: '路径不存在',
        path: path
    })
};

// 监听500
const serverError = (err, req, res, next) => {
    let error = format(err)
    res.logger.error(error)
    res.status(500).json({
        state: 500,
        err: error
    })
};

module.exports = [routeError, serverError]