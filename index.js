require('dotenv').config()
console.log(process.env)

const express = require("express")
const app = express()
const connection = require("./Sql/connection")
const port = 5000

app.get("/", (req, res) => res.send("Welcome"))

app.get("/users", (req, res) => {
    connection.query("SELECT * FROM users", (err, results) => {
        res.json(results)
    } )
})

app.listen(port, () => console.log(`Listening on port: ${port}`))