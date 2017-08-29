const router = require('express').Router();

router.use('/user', require('./user'))
router.use('/game', require('./game'))
router.use('/challenge', require('./challenge'))
router.use('/questionType', require('./questionType'))
router.use('/riddle', require('./riddle'))
// router.use('/rating', require('./rating'))
// router.use('/review', require('./review'))

module.exports = router;