const express = require('express')
const router = express.Router()
const Form = require('../models/form')



router.get('/', (req, res) => {
  res.render('createForm/index')
})


router.post('/', async (req, res) => {
    const form = new Form({
      buttonText: req.body.buttonText,
      link: req.body.link
    })
    try {
      const newform = await form.save()
      res.redirect(`/formRouter/${form.id}`)
        // res.render('createform/formTemplate',{
        //     form
        // });
    } catch {
      res.send( {
        errorMessage: 'Error creating form'
      })
    }
  })

  router.get('/:id', async (req, res) => {
    try {
      const form = await Form.findById(req.params.id)
    //   res.send(form.link)
    //   console.log(form)
      res.render('createForm/formTemplate', {form})
    } catch {
      res.redirect('/')
    }
  })
  
  

module.exports = router