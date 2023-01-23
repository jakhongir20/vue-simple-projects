const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportStrategy = require('./middleware/passport-strategy');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const reviewRoutes = require('./routes/review.routes');
const keys = require('./keys');
const cors = require('cors');
const app = express();

mongoose.connect(keys.DATABASE_GLOBAL)
   .then(() => console.log('MongoDB connected ...'))
   .catch(err => console.error(err))

app.use(cors());
app.use(passport.initialize());
passport.use(passportStrategy);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/review', reviewRoutes);

module.exports = app;
