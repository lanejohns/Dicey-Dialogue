const router = require('express').Router();
const sessionRouter = require('./session')
const usersRouter = require('./users')
const talesRouter = require('./tales')

router.use('/session', sessionRouter)
router.use('/tales', talesRouter)

router.use('/users', usersRouter)

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { Tale } = require('../../db/models/tale')

// This route grabs the tales in the database
router.get('/', asyncHandler(async (req, res) => {
    const tales = await Tale.findAll()
    // console.log("THIS IS WHERE TALES SHOULD BE", tales)
    res.json({ tales })
}))

module.exports = router;
