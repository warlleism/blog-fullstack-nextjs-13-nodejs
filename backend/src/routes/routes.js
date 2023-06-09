const express = require("express");
const Router = express.Router();
const read = require('../controllers/read')
const readAll = require('../controllers/readAll')
const deletar = require('../controllers/delete')
const register = require('../controllers/create')
const updateData = require('../controllers/update')

Router.post("/read", read)

Router.put("/update", updateData)

Router.put("/create", register)

Router.delete("/delete", deletar)

Router.get("/all", readAll)

module.exports = Router;