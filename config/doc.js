
// 根据需求自行配置
exports.home = [{
    title: "端口",
    content: [
        {
            name: "开发环境",
            text: "http://localhost:6060"
        }
    ]
},
{
    title: "请求状态",
    content: [
        {
            name: "200",
            text: "成功",
        },
        {
            name: "400",
            text: "客户端错误!",
        },
        {
            name: "401",
            text: "您还未登录!",
        },
        {
            name: "403",
            text: "登录已过期!",
        },
        {
            name: "500",
            text: "服务端错误!",
        },
    ],
},
{
    title: "请求头",
    content: [
        {
            name: "token",
            text: "登录状态码",
        },
    ],
}]
