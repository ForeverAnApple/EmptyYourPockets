const express = require('express')
const api = express.Router()

// GET to this controller base URI (the default)
api.get('/contactus', (req, res) => {
    res.render('/contactus.ejs')
})