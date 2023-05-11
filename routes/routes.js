const express = require("express")
const controller = require("../controllers/controllerProduto")

const routes = express.Router()

routes.get("/",controller.getAll)
routes.get("/:id",controller.getById)
routes.post("/",controller.create)
routes.put("/:id",controller.update)
routes.delete("/:id",controller.delete)
routes.get("/:cidade",controller.Cidade)

module.exports = routes