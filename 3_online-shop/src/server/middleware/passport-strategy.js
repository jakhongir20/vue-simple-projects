const {Strategy, ExtractJwt} = require('passport-jwt');
const keys = require('../keys');
const User = require('../models/user.model');

// Autherization: Bearer ksjcdsldm.,akmxksxc.ecfcfa
const options = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
   try {
      const candidate = await User.findById(payload.userId).select('id');

      if (candidate) {
         done(null, candidate);
      } else {
         done(null, false);
      }
   } catch (err) {
      console.error(err)
   }
})
