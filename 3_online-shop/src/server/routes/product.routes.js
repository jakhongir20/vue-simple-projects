const passport = require('passport');
const {Router} = require('express');
// const upload = require('../middleware/upload');
const ctr = require('../controllers/product.controller');
const router = Router();


// Admin
// /api/product/admin
router.post(
   '/admin/create',
   ctr.create
);

router.get(
   '/admin/products',
   ctr.getAll
);

router.get(
   '/admin/product/:id',
   ctr.getById
);

router.put(
   '/admin/:id',
   passport.authenticate('jwt', {session: false}),
   ctr.update
);

router.delete(
   '/admin/:id',
   passport.authenticate('jwt', {session: false}),
   ctr.remove
);

// Base
// /api/products
router.get('/', ctr.getAll);
router.get('/:id', ctr.getById);
router.put('/:id', ctr.addView);



module.exports = router;
