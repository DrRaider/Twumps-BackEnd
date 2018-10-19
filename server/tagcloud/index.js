const express = require('express')
const router = express.Router()
const tagcloud = require('./tagcloud')

router.get('/', async (req, res, next) => {
  try {
    res.send(await tagcloud.getTagCloud())
  } catch (err) {
    return next(err)
  }
})

router.get('/set', async (req, res, next) => {
  try {
    res.send(await tagcloud.setTagCloud())
  } catch (err) {
    return next(err)
  }
})
module.exports = router
