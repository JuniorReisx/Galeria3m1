import express from "express";
import { pessoaRouter } from "./src/routes/person.routes.js";
import { tryConnectSequelize } from "./src/database/db.js";
const server = express()
const port = process.env.PORT || 3000


server.use(express.json())
server.use(express.static('public'))
server.use(pessoaRouter)


server.listen(port, () => {
  tryConnectSequelize()
  console.log(`servidor: http://localhost:${port}`)
  })