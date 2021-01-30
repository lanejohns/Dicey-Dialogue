const express = require('express')
const asyncHandler = require('express-async-handler')
const { Tale } = require('../../db/models')
const { User } = require('../../db/models')
const { requireAuth } = require('../../utils/auth')


const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const tales = await Tale.findAll()
    return res.json({tales})
}))

router.get(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    const id = Number.parseInt(req.params.id)
    // console.log("THIS IS THE ID", id)
    // TODO: check to see if the id below is read as a number, may have to use Number.parseInt() if not
    const tale = await Tale.findOne({where: id})
    // console.log(tale)
    return res.json({tale})
}))

router.post('/', requireAuth ,asyncHandler(async (req, res) => {
    // first we need to find the user based on the user request
    // then we want to build the tale based on title, content, and userId
    const tale = await Tale.build({
        title: req.body.title,
        content: req.body.content,
        userId: req.user.id
    })
    // then we save the new tale to the database
    await tale.save()
    res.json({tale})
}))

module.exports = router