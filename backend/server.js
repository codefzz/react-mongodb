const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const service = require("./serviceRoutes")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(service)

app.listen(PORT, () => {
    connect.connectToServer()
    
})


console.log(`Server runs on port ${PORT}`)