const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

const mongodb = require('../../mongodbSensitive')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  // aauthorization === 'Bearer adfasdfasdfadasdf'
  if (!authorization) {
    return res.status(401).send({error: 'You must me logged in'})
  }

  const token = authorization.replace('Bearer ', '')
  jwt.verify(token, mongodb.jwtSecretKey, async (error, payload) => {
    if (error) {
      return res.status(401).send({error: 'You must me logged in'})
    }

    const { userId } = payload

    req.user = await User.findById(userId)
    next()
  })
}