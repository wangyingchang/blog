import express from 'express'
// const express = require('express')
const blogRouter = express.Router({
  mergeParams: true
})

const Blog = require('../models/Blog')
const BlogSort = require('../models/BlogSort')
const BlogTag = require('../models/BlogTag')

blogRouter.post('/createBlog', async (req, res, nex) =>{

  const blogInfo = await Blog.create(req.body);
  if (!blogInfo) {
    return res.status(500).send({
        message: '添加失败'
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

 const blogTagInfo = await BlogTag.create({
  blogId: blogInfo.id,
  tagId: req.body.tagId,
 })
  if (!blogTagInfo) {
  return res.status(500).send({
      message: '添加失败'
  });
  }

 
  return res.send({
      message: '添加成功'
  });
})

module.exports = blogRouter;