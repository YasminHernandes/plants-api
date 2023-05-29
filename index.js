const express = require('express')
const server = express()

const plants = require('./src/data/plants.json')

server.get('/', (req, res) => {
  return res.json(plants)
})

server.listen(3000, () => console.log('Server is running at port 3000 🚀'))