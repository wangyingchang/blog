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
// const express = require('express')
const blogRouter = express_1.default.Router({
    mergeParams: true
});
const models = require('../models');
// const Sort = require('../models/Sort')
// const BlogSort = require('../models/BlogSort')
// const BlogTag = require('../models/BlogTag')
/**
 * 博客列表
 */
blogRouter.get('/getBlogList', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let blogList = yield models.Blog.findAll({
        include: [models.BlogSort]
    });
    if (!blogList) {
        return res.send({
            message: '博客列表为空'
        });
    }
    res.send(blogList);
}));
/**
 * 创建博客
 *
 */
blogRouter.post('/createBlog', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blogInfo = yield models.Blog.create(req.body);
    if (!blogInfo) {
        return res.status(500).send({
            message: '添加失败'
        });
    }
    if (!req.body.sortId) {
        return res.status(500).send({
            message: '请添加分类ID'
        });
    }
    const blogSortInfo = yield models.BlogSort.create({
        blogId: blogInfo.id,
        sortId: req.body.sortId,
    });
    if (!blogSortInfo) {
        return res.status(500).send({
            message: '添加失败'
        });
    }
    if (!req.body.tagIds) {
        return res.status(500).send({
            message: '请添加标签ID'
        });
    }
    req.body.tagIds.forEach((tagId) => __awaiter(void 0, void 0, void 0, function* () {
        const blogTagInfo = yield models.BlogTag.create({
            blogId: blogInfo.id,
            tagId: tagId,
        });
        if (!blogTagInfo) {
            return res.status(500).send({
                message: '添加失败'
            });
        }
    }));
    return res.send({
        message: '添加成功'
    });
}));
module.exports = blogRouter;
