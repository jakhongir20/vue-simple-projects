const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const keys = require('../keys');
const User = require('../models/user.model');

module.exports.login = async (req, res) => {
   const candidate = await User.findOne({login: req.body.login});

   if (candidate) {
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password);

      if (isPasswordCorrect) {
         const token = jwt.sign({
            login: candidate.login,
            userId: candidate._id,
         }, keys.JWT, {expiresIn: 60 * 60});
         res.json({token})

      } else {
         res.status(401).json({message: 'Password is incorrect'});
      }
   } else {
      res.status(404).json({message: 'User is not found'});
   }

}
module.exports.createUser = async (req, res) => {
   const candidate = await User.findOne({login: req.body.login});

   if (candidate) {
      res.status(409).json({message: 'This login is already taken'})
   } else {
      const salt = bcrypt.genSaltSync(10);
      const user = new User({
         login: req.body.login,
         password: bcrypt.hashSync(req.body.password, salt)
      });

      await user.save();
      res.status(201).json(user);
   }
}
