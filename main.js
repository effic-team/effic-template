let effic = require("effic")
// 路游服务
const server = require("./server");
// 中间件
const { useBefore, useAfter } = require("./middleware/index");
const app = effic();

// 请求格式
app.use(effic.json());
app.use(effic.urlencoded());

// 前置中间件
app.useSet(useBefore)
// 注册服务
app.use(server);
// 后置中间件
app.useSet(useAfter)

app.listen(9090, () => {
  console.log("server is running");
});
