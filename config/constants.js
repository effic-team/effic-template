const defaulConfig = {
}

/*
 *  @ 开发环境配置
 */
const development = {
    ...defaulConfig,
    // Mysql基础信息
    mysql: {
        host: 'localhost',
        port: 3306,
        user: "root",
        password: "123456",
        database: "effic"
    }
}

/*
 * @ 正式环境配置
 */
const production = {
    ...defaulConfig,
    // Mysql基础信息
    mysql: {
        host: 'localhost',
        port: 3306,
        user: "root",
        password: "123456",
        database: "effic"
    }
}

const config = {
    development,
    production
}

module.exports = config[process.env.NODE_ENV || 'production']