var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams: true
    });
    // 添加或更新
    router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const model = yield req.Model.upsert(req.body);
        res.send(model);
    }));
    // 查询所有
    router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const models = yield req.Model.findAll();
        res.send(models);
    }));
    // 查询
    router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const model = yield req.Model.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(model);
    }));
    // 修改
    router.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const model = yield req.Model.update(req.body);
        res.send(model);
    }));
    // 删除
    router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield req.Model.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send({
            success: true
        });
    }));
    // 授权中间件
    const authMiddleware = require('../middleware/auth');
    // 资源中间件
    const resourceMiddleware = require('../middleware/resource');
    app.use('/api/admin/rest/:resource', authMiddleware(), resourceMiddleware(), router);
    const userRouter = require('./userRouter');
    app.use(userRouter);
    const blogRouter = require('./blogRouter');
    app.use(blogRouter);
    // 错误处理函数
    app.use((err, req, res, next) => __awaiter(this, void 0, void 0, function* () {
        res.status(err.statusCode || 500).send({
            message: err.message
        });
    }));
};
