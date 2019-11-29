module.exports = app => {
    const jwt = require('jsonwebtoken')

    return async (req, res ,next) => {
        const token = String(req.headers.authorization || '').split(' ').pop();

        if (!token) {
            return res.status(500).send({
                message: '没有token'
            })
        }
        jwt.verify(token, "jwtTokenSecret", (err,decodes) => {
            if (err) {
                return res.status(401).send({
                    message: 'token信息错误'
                })
            } 
        })
        await next()
    }
}