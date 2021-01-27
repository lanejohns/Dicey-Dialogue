const express = require('express')
const asyncHandler = require('express-async-handler')
const { Tale } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const tales = await Tale.findAll()
    return res.json({tales})
}))

router.post('/newtale', asyncHandler(async (req, res) => {
    // first we need to find the user based on the user token
    const user = await db.User.findOne({ where: { id: req.session.auth.userId } });
    // then we want to build the tale based on title, content, and userId
    const tale = await Tale.build({
        title: req.body.title,
        content: req.body.content,
        userId: user.id
    })
    // then we save the new tale to the database
    await tale.save()
    res.redirect('/')
}))

module.exports = router