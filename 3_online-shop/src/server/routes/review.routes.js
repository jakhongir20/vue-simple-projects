const {Router} = require('express');
const {create} = require('../controllers/review.controller');
const passport = require("passport");
const router = Router();

// /api/review
router.post('/',
   passport.authenticate('jwt', {session: false}),
   create);

module.exports = router;
