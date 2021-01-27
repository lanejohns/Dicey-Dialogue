const express = require('express')
const asyncHandler = require('express-async-handler')
const { Tale } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const tales = await Tale.findAll()
    return res.json({tales})
}))

module.exports = router