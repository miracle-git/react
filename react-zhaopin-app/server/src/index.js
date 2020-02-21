const express = require('express')
const app = express()
const router = require('./router')

router.apply(app)

app.listen(8000, () => console.log('App server is running on 8000...'))