"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express');
const userRouter = express_1.default.Router({
    mergeParams: true
});
const User = require('../models/User');
// 登录
userRouter.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    console.log(name, password);
    if (!name || !password) {
        return res.status(500).send({
            message: '用户或密码不能为空'
        });
    }
    // 1. 验证用户名
    const userInfo = yield User.findOne({
        where: {
            name: name
        }
    });
    if (!userInfo) {
        return res.status(500).send({
            message: '用户不存在'
        });
    }
    // 2. 验证密码
    const bcrypt = require('bcryptjs');
    const isVaild = bcrypt.compareSync(password, userInfo.password); //  解密
    if (!isVaild) {
        return res.status(500).send({
            message: '密码错误'
        });
    }
    // 3. 返回token
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ name: userInfo.name, password: userInfo.password }, "jwtTokenSecret", { expiresIn: 60 * 60 * 24 });
    return res.send({ token });
}));
// 注册
userRouter.post('/regist', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let user = req.body;
    if (!user.name || !user.password) {
        return res.status(500).send({
            message: '用户或密码不能为空'
        });
    }
    const findUser = yield User.findOne({
        where: {
            name: user.name
        }
    });
    if (findUser) {
        return res.status(500).send({
            message: '用户名存在'
        });
    }
    // 密码加密
    const bcrypt = require('bcryptjs');
    const saltRounds = 10; // 生成salt的迭代次数
    const salt = bcrypt.genSaltSync(saltRounds); // 随机生成salt
    let hash = bcrypt.hashSync(user.password, salt); // 获取hash值
    user.password = hash; // 把hash值赋值给password变量
    const userInfo = yield User.create(user);
    if (!userInfo) {
        return res.status(500).send({
            message: '注册失败'
        });
    }
    return res.send({
        message: '注册成功'
    });
}));
// 读取markdown
userRouter.get("/markdown", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fs = require('fs');
    const marked = require('marked');
    const path = "./src/markdown/Vue2.md";
    console.log(path);
    fs.readFile(path, (err, data) => {
        if (err) {
            res.send('文件不存在');
        }
        else {
            const str = marked(data.toString());
            res.send(str);
        }
    });
}));
module.exports = userRouter;
