const userRouter = require('./user')

module.exports = {
  apply(app) {
    app.use('/user', userRouter)
  }
}