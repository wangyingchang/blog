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
    const jwt = require('jsonwebtoken');
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const token = String(req.headers.authorization || '').split(' ').pop();
        console.log("++++++++++++token: ", req.headers.authorization);
        if (!token) {
            return res.status(500).send({
                message: '没有token'
            });
        }
        jwt.verify(token, "jwtTokenSecret", (err, decodes) => {
            if (err) {
                return res.status(401).send({
                    message: 'token信息错误'
                });
            }
        });
        yield next();
    });
};
