const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://userName:Password@cluster0.rqsxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; //"mongodb+srv://techspecwb:321poi654@cluster0.rqsxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
        
require("dotenv").config({path: "./config.env"})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {  //const client = new MongoClient(uri, {  // const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database

module.exports = {
    connectToServer: () => {
        database = client.db("servicesData")
    },
    getDb: () => {
        return database
    }
};
console.log("Hi")

/*
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/