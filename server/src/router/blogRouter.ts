import express from 'express'
// const express = require('express')
const blogRouter = express.Router({
  mergeParams: true
})

const Blog = require('../models/Blog')
const Sort = require('../models/Sort')
const BlogSort = require('../models/BlogSort')
const BlogTag = require('../models/BlogTag')

/**
 * 博客列表
 */
blogRouter.get('/getBlogList', async (req, res, next) => {
  let blogList = await Blog.findAll();

  if (!blogList) {
    return res.send({
      message: '博客列表为空'
    });
  }

  res.send(blogList)
})


/**
 * 创建博客
 * 
 */
blogRouter.post('/createBlog', async (req, res, next) => {

  const blogInfo = await Blog.create(req.body);
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
  const blogSortInfo = await BlogSort.create({
    blogId: blogInfo.id,
    sortId: req.body.sortId,
  })
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
  req.body.tagIds.forEach( async tagId => {
    const blogTagInfo = await BlogTag.create({
      blogId: blogInfo.id,
      tagId: tagId,
    })

    if (!blogTagInfo) {
      return res.status(500).send({
          message: '添加失败'
      });
    }
  });

  return res.send({
      message: '添加成功'
  });
})

module.exports = blogRouter;