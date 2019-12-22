const express = require('express')
const api = express.Router()

// GET to this controller base URI (the default)
api.get('/', (req, res) => {
    res.render('contactus/index.ejs')
})

module.exports = api;