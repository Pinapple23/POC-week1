const express = require('express')
const router = express.Router()

//
router.get('/', (req, res) => {
  res.render('Item Details')
})

//create 

module.exports = router