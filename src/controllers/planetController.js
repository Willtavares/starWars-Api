const express = require('express')
const Planets = require('../models/planets')

const router = express.Router()

router.post('/register', async(req, res) => {
    const { name } = req.body

    try {
        if (await Planets.findOne({ name })) {
            return res.status(400).send({error: 'Este Planeta já existe'})
        }
        const planet = await Planets.create(req.body)

        return res.send({ planet })
    } catch (error) {
        return res.status(400).send({error: 'Registration Failed'})
    }
})

module.exports = app => app.use(router)