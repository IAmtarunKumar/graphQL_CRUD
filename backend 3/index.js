const express = require("express");
require("dotenv").config()
const bodyParser = require("body-parser");
const cors = require("cors");
const {connection} = require("./config/db");

const { expressMiddleware } = require("@apollo/server/express4");
const {server} = require("./apolloServer")


async function startServer() {

  const app = express();
  app.use(bodyParser.json());
  app.use(cors());


  await server.start();


  app.use("/graphql", expressMiddleware(server));


  app.listen(process.env.port, async() =>{
    try {
        await connection
        console.log("MongoDB is conneted")
    } catch (error) {
        console.log(error)
    }
   console.log(`Serevr Started at PORT ${process.env.port}`)
});
}

startServer();
