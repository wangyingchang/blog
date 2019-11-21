import express from 'express'
// const express = require('express');
const userRouter = express.Router({
    mergeParams: true
});
const User = require('../models/User');

// 登录
userRouter.post('/login', async (req, res, next) => {
    const { name, password } = req.body;
    console.log(name,password);

    if (!name || !password) {
        return res.status(500).send({
            message: '用户或密码不能为空'
        });
    }

    // 1. 验证用户名
    const userInfo = await User.findOne({
        where: {
            name: name
        }
    })
    if (!userInfo) {
        return res.status(500).send({
            message: '用户不存在' 
        })
    }

    // 2. 验证密码
    const bcrypt = require('bcryptjs');
    const isVaild = bcrypt.compareSync(password, userInfo.password);  //  解密
    if (!isVaild) {
        return res.status(500).send({
            message: '密码错误'
        })
    }

    // 3. 返回token
    const jwt = require('jsonwebtoken'); 
    const token = jwt.sign({name: userInfo.name, password: userInfo.password}, 
        "jwtTokenSecret", {expiresIn: 60 * 60 * 24 });
    return res.send({token});
})

// 注册
userRouter.post('/regist', async (req, res, next) => {
    let user = req.body;

    if (!user.name || !user.password) {
        return res.status(500).send({
            message: '用户或密码不能为空'
        });
    }

    const findUser = await User.findOne({
        where: {
            name: user.name
        }
    })
    if (findUser) {
        return res.status(500).send({
            message: '用户名存在'
        })
    }

    // 密码加密
    const bcrypt = require('bcryptjs');
    const saltRounds = 10; // 生成salt的迭代次数
    const salt = bcrypt.genSaltSync(saltRounds); // 随机生成salt
    let hash = bcrypt.hashSync(user.password, salt); // 获取hash值
    user.password = hash; // 把hash值赋值给password变量
    
    const userInfo = await User.create(user);

    if (!userInfo) {
       return res.status(500).send({
           message: '注册失败'
       });
    }

    return res.send({
        message: '注册成功'
    });
});

// 读取markdown
userRouter.get("/markdown", async (req, res) => {
    const fs = require('fs');
    const marked = require('marked');
    const path = "./src/markdown/Vue2.md";
    console.log(path)
    fs.readFile(path, (err, data) => {
        if (err) {
            res.send('文件不存在')
        } else {
            const str = marked(data.toString());
            res.send(str);
        }
    })
})

module.exports = userRouter;
