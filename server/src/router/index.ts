module.exports = app =>{

const express = require('express')
const router = express.Router({
    mergeParams: true
})
    
// 添加或更新
router.post('/', async (req, res) => {
    
    const model = await req.Model.upsert(req.body);
    
    res.send(model);
})

// 查询所有
router.get('/', async (req, res) => {

    const models = await req.Model.findAll();

    res.send(models);
})

// 查询
router.get('/:id', async (req, res) => {

    const model = await req.Model.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send(model);
});

// 修改
router.put('/', async (req, res) => {

    const model = await req.Model.update(req.body);

    res.send(model);
})

// 删除
router.delete('/:id', async (req, res) => {
    
    await req.Model.destroy({
        where: {
            id: req.params.id
        }
    })

    res.send({
        success: true
    })
})

// 授权中间件
const authMiddleware = require('../middleware/auth')
// 资源中间件
const resourceMiddleware = require('../middleware/resource')

app.use('/api/admin/rest/:resource', authMiddleware(), resourceMiddleware(), router)

const userRouter = require('./userRouter');
app.use(userRouter);
const blogRouter = require('./blogRouter');
app.use(blogRouter);

// 错误处理函数
app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        message: err.message
    })
})

}