const express = require('express')
const router = express.Router()

const Vaga = require('../models/Vaga')



// @desc get all vagas
// @route GET vagas/
router.get('/', async (req, res) => {
    const vagas = await Vaga.find({ status: 'active' })
    //   .populate('user')
      .sort({ createdAt: 'desc' })
      .lean().catch(err => {
        console.log(err)
        res.send(err)
      })

      res.send(JSON.stringify(vagas))
})

// @desc get single vaga
// @route  GET vagas/:id
router.get('/:id', async (req, res) => {

})

// @desc add vaga
// @route POST vagas
router.post('/', async (req, res) => {
    const vaga = await Vaga.create(req.body)
        .then(vaga => res.send(vaga))
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})


// @desc edit vaga
// @route PUT vagas/:id
router.put('/:id', async (req, res) => {

})

// @desc delete vaga
// @route DELETE vagas/:id
router.delete('/:id', async (req, res) => {

})

module.exports = router