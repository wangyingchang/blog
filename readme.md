~~~
npm install -g cnpm --registry=https://registry.npm.taobao.org
~~~

创建项目目录
~~~
mkdir blog
~~~

##### 一、服务端：server

创建服务端目录

~~~
mkdir server
~~~

初始化项目

~~~
npm init
~~~

安装typescript express
~~~
npm install express --save
npm install @types/express --save
npm install ts-node-dev --save
npm install typescript --save
~~~

创建build、src目录

~~~
mkdir build
mkdir src
~~~
生成typescript 默认文件
~~~
tsc --init
~~~

修改tsconfig.json

~~~
"outDir": "./build/",  
~~~

然后修改package.json文件中的scripts

~~~
"tsc": "tsc",
"dev": "ts-node-dev --respawn --transpileOnly ./src/app.ts",
"prod": "tsc && supervisor ./build/app.js",
"test": "echo \"Error: no test specified\" && exit 1"
~~~

其中dev表示开发环境，当修改文件之后会自动编译，prod是运行环境，执行方法为：npm run dev和npm run prod.

~~~
npm install ts-node-dev -g
npm install supervisor -g
~~~



通过命令在src目录中新建一个app.ts文件

~~~
touch src/app.ts
~~~

~~~typescript
import express=require('express');
const app:express.Application=express();
app.get('/',function(req,res){
    res.send('Hello World!');
});
app.listen(8888,function(){
    console.log('Example app listening on port 8888!');
})
~~~



安装sequelize + mysql2 + sequelize-cli 

~~~
 npm install sequelize --save
 npm install mysql2 --save
 npm install sequelize-cli --save
 
 npm install @types/node --save
 npm install @types/validator --save
 npm install @types/bluebird --save

~~~

<https://segmentfault.com/a/1190000011583608>


读取markdown
~~~
npm install marked fs
~~~



##### 二、管理后台：admin

安装 vue-cli

~~~
cnpm install -g @vue/cli
~~~

创建 admin

~~~
vue create admin
~~~

引入 element

~~~
vue add element
~~~

引入 vue-router

~~~
vue add router
~~~

启动服务

~~~
npm run serve
~~~

