import express from 'express'
import { fstat } from 'fs';
// const express = require('express')
const noteRouter = express.Router({
  mergeParams: true
})

// 笔记目录
const filePath = './src/note/';

/**
 * 创建笔记
 */
noteRouter.post("/note", async (req, res) => {

  const {fileName, content} = req.body;

  const fs = require('fs');
  fs.appendFile(filePath + fileName, content, (err) => {
    if (err) {
      res.status(500).send({
        message: '创建文件失败'
      })
    }
  })

  res.send({
    message: '创建文件成功'
  })
})

/**
 * 笔记列表
 */
noteRouter.get("/note", async (req, res) => {
  const fs = require('fs');
  fs.readdir(filePath, (err, data) => {
    if (err) {
      res.status(500).send({
        message: '读取笔记目录失败'
      })
    }
    let fileList = [];
    data.forEach(file => {
      fileList.push({fileName: file})
    });

    res.send(fileList)
  })


})

/**
 * 读取笔记
 */
noteRouter.get("/note/:fileName", async (req, res) => {
  const fileName = req.params.fileName;

  const fs = require('fs');
  fs.readFile(filePath + fileName, (err, data) => {
      if (err) {
          res.send({
            message: '读取文件失败'
          })
      }

      res.send({
        fileName: fileName,
        content: data.toString()
      })
  })

})


module.exports = noteRouter;