// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
//   }
  
  const express = require('express')
  const app = express()
  const expressLayouts = require('express-ejs-layouts')
  const bodyParser = require('body-parser')
//   const methodOverride = require('method-override')

  const indexRouter = require('./routes/index')
  const formRouter = require('./routes/form')
  
  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/views')
  app.set('layout', 'layouts/layout')
  app.use(expressLayouts)
  // app.set("layout form", false);
//   app.use(methodOverride('_method'))
  app.use(express.static('public'))

  app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))
  app.use(indexRouter)

  app.use(express.static('public')) 
  

const mongoose = require('mongoose');

// Connect to MongoDB locally
mongoose.connect('mongodb://127.0.0.1/webBuilder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

  app.use('/', indexRouter)
  app.use('/formRouter',formRouter)

  
  app.listen(process.env.PORT || 3000)