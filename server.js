const express = require('express')
const app = express()
const cors = require('cors')
const mongodbClient = require('mongodb').MongoClient
require('dotenv').config()

let db ,
    dbConectionString = process.env.DB_STRING,
    dbName ='Sample_Database',
    collection ;

mongodbClient.connect(dbConectionString)
    .then(client =>{
        console.log("Connected to database")
        db = client.db(dbName)
        collection = db.collection('Database_1')
    })


app.set('view engine', 'ejs')   
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running on port `)
})