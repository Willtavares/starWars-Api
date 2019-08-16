const express = require('express')
const Planets = require('../models/planets')
const request = require('request')


const router = express.Router()



router.get('/list', async(req, res) => {
    try {
        const data = await Planets.find()
            return res.status(200).send(data)

    } catch (error) {
            return res.status(404).send({error: 'Get List Not Found'})
    }

})

router.post('/register', async(req, res) => {
    const { name } = req.body
    try {
        if (await Planets.findOne({ name })) {
            return res.status(400).send({error: 'This planet already exists'})
        }
        const planet = await Planets.create(req.body)
            return res.status(200).send({ planet })

    } catch (error) {
            return res.status(400).send({error: 'Registration Failed'})
    }
})

router.get('/findname/:name', async (req, res) => {
    const name = {name: req.params.name}
    try {
        if (await Planets.findOne(name) == null) {
            return res.status(400).send({error: 'This planet not exists'})
        }
        const planet = await Planets.find(name)
            return res.send({ planet })

    } catch (err) {
             return res.status(400).send({ error: 'Error loading Planet by name' });
    }
});

router.get('/findid/:id', async (req, res) => {
    const id = {_id: req.params.id}
    try {
        if (await Planets.findOne(id) == null) {
            return res.status(400).send({error: 'This id for planet not exists'})
        }
        const planet = await Planets.find(id)
            return res.status(200).send({ planet })

    } catch (err) {
            return res.status(400).send({ error: 'Error loading by Id' });
    }
});

router.delete('/delete/:id', async(req, res) => {
    const id = {_id: req.params.id}
    try {
        if (await Planets.findOne(id) == null) {
            return res.status(400).send({error: 'This id for planet not exists'})
        }

        const planet = await Planets.findOneAndDelete(id)

        return res.status(200).send('Record successfully deleted!')

    } catch (error) {
        return res.status(400).send({error: 'Delection Failed'})
    }
})

module.exports = app => app.use('/planet',router)