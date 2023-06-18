const jwt = require("jsonwebtoken");
let secretKey = "秘钥"
module.exports = {
    $createToken(info) {
        return new Promise((resolve, reject) => {
            // jwt.sign参数1  需要用于生成token的信息
            // jwt.sign参数2  私钥
            // 生成token的配置信息
            //expiresIn 参数格式 : 
            //60(秒) "2 days"(两天)  10h (10小时) 7d(表示7天)       
            let config = {
                expiresIn: "9999 days", //token过期时间 默认以秒为单位
            }
            jwt.sign(info, secretKey, config, (err, data) => {
                if (err) {
                    resolve([err, undefined]);
                } else {
                    resolve([undefined, data]);
                }
            });
        });
    },

    // 解析验证token
    $verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, $secretKey, (err, data) => {
                if (err) {
                    resolve([err, undefined]);
                } else {
                    resolve([undefined, data]);
                }
            });
        });
    },
    // '不校验,直接解析 token'
    $decode(token) {
        return new Promise((resolve, reject) => {
            jwt.decode(token, $secretKey, (err, data) => {
                if (err) {
                    resolve([err, undefined]);
                } else {
                    resolve([undefined, data]);
                }
            });
        });
    },
};

// 生成token

// 验证token
// jwt.verify(token, secretKey, (err, data) => {
//     console.log(data, '解析成功')
// })

// jwt.decode(token, secretKey, (err, data) => {
//     console.log(data, '不校验,直接解析')
// })

// 生成
// 参数 a:信息 b:私钥 c:回调函数=>(错误,token)
// jwt.sign(a, b, c)
// 验证
// 参数 a:token b:私钥
// jwt.verify(a, b,(err,data)=>{})