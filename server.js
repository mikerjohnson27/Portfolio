const express = require('express')
const app = express()
const router = express.Router()

const PORT = 8800 || env.req.server

const homepage = require('./src/index.html')


router.get('/', (req, res) =>{
    res.send(homepage)
})