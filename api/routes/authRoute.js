const authRoute = require('express').Router()
const jwt = require('jsonwebtoken')

authRoute.post(`login`, async (req, res) => {
    const {id, password} = req.body
    const _jwt = jwt.sign(`${id}---${password}`,process.env.serect, {expiresIn: '2h'})
    res.json({_jwt, expiresIn: 2*60})
})

module.exports = authRoute