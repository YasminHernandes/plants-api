const express = require('express')
const server = express()

const plants = require('./src/data/plants.json')

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.get('/', (req, res) => {
  return res.json(plants)
})

server.listen(3000, () => console.log('Server is running at port 3000 🚀'))