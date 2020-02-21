const express = require('express')
const Router = express.Router()

Router.get('/info', (req, res) => {
  return res.json({id: 1, name: 'Miracle'})
})

module.exports = Router