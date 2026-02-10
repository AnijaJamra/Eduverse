const jwt = require('jsonwebtoken')
const User = require("../models/userModel")

const adminprotect = async (req, res, next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // ✅ set user from token
      req.user = await User.findById(decoded.id).select('-password')

      // check user exists
      if(!req.user){
          res.status(401)
          throw new Error('Unauthorised access')
      }

      // check admin
      if(req.user.isAdmin){
          next()
      } else {
          res.status(401)
          throw new Error('Unauthorised access : Admin Only')
      }

    } catch (error) {
      res.status(401)
      throw new Error('Unauthorised access')
    }

  } else {
    res.status(401)
    throw new Error('Unauthorised access')
  }
}

module.exports = adminprotect
