const express = require('express')
const cors = require('cors')
const cognitoEndPoints = require("./auth")
const dataEndPoints = require("./data")
const uuid = require('uuid')
const dotenv = require('dotenv').config()
const AmazonCognitoIdentity = require('amazon-cognito-identity-js')

const port = process.env.PORT || 4000

const app = express()
app.use(cors({
    origin:'*',
    methods:'POST,GET'
}))
app.use(express.json({limit:'10mb'}))
app.use('/auth',cognitoEndPoints)
app.use('/data',dataEndPoints)

app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})

app.get("/",async (req, res) => {
    res.sendStatus(200)
})
  
