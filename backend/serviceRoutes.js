const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId

let serviceRoutes = express.Router()

//localhost:3000/service --retrieve all
serviceRoutes.route("/service").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("service").find({}).toArray()
    if (data.length > 0) {
        response.json(data)
    } else {
        throw new Error("data was not found ")  // ("data was not found :(")
    }
})

//localhost:3000/service/123 --retrieve one
serviceRoutes.route("/service/:id").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("service").findOne({ _id: new ObjectId(request.params.id)})
    if (Object.keys(data).length > 0) {
        response.json(data)
    } else {
        throw new Error("data was not found ")
    }
})

    //3 --create one
serviceRoutes.route("/service").post(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        category: request.body.category,
        title: request.body.category,
        name: request.body.name,
        address: request.body.address,
    }
    let data = await db.collection("service").insertOne(mongoObject)
    response.json(data)
})

//4 --update one
serviceRoutes.route("/service/:id").put(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
        category: request.body.category,
        title: request.body.category,
        name: request.body.name,
        address: request.body.address,
        }
    }
    let data = await db.collection("service").updateOne(({_id: new ObjectId(request.params.id) }, mongoObject))
    response.json(data)    
})

//5 --delete one
serviceRoutes.route("/service/:id").delete(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("service").deleteOne({ _id: new ObjectId(request.params.id)})
    response.json(data)
})

module.exports = serviceRoutes

