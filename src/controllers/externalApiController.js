const express = require('express')
const request = require('request')

const router = express.Router()

router.get('/planets/', async (req, res) => {
  try {
      request(`https://swapi.co/api/planets/`, function (error, response, body) {
        res.status(200).send(body)
  });
  } catch (error) {
          return res.status(400).send({ error: 'Error connecting API' });
  }
});

router.get('/planet/:id', async (req, res) => {
  const number = req.params.id
  try {
      request(`https://swapi.co/api/planets/${number}/`, function (error, response, body) {
        res.status(200).send(body)
  });
  } catch (error) {
          return res.status(400).send({ error: 'Error connecting API' });
  }
});

module.exports = app => app.use('/externalapi',router)