const express = require('express')
const asyncHandler = require('express-async-handler')
const { Tale } = require('../../db/models')
const { User } = require('../../db/models')
const { Comment } = require('../../db/models')
const { requireAuth } = require('../../utils/auth')
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll()
    return res.json({comments})
}))

router.get(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    const id = Number.parseInt(req.params.id)
    const comments = await Comment.findAll({
        where: {
            taleId: id
        }
    })
    return res.json({comments})
}))

router.post('/', requireAuth ,asyncHandler(async (req, res) => {
    console.log("REQ.BODY!!!!!", req.body)
    const comment = await Comment.build({
        taleId: req.body.taleId,
        content: req.body.content
    })
    await comment.save()
    res.json({comment})
}))

module.exports = router