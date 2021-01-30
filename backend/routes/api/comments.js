const express = require('express')
const asyncHandler = require('express-async-handler')
const { Tale } = require('../../db/models')
const { User } = require('../../db/models')
const { requireAuth } = require('../../utils/auth')
const router = express.Router()

router.post('/', requireAuth ,asyncHandler(async (req, res) => {
    const tale = await Tale.build({
        comment: req.body.comment
    })
    await tale.save()
    res.json({tale})
}))

module.exports = router