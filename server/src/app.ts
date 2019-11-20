import express = require('express');
const app: express.Application = express();
const bodyParser = require('body-parser');

// 支持跨域请求
app.use(require('cors')());

// 支持post请求
app.use(bodyParser.json());
//app.use(express.json())

// 引入接口
require('./router/index')(app);

app.listen(8888,function(){
    console.log('Example app listening on port 8888!');
})