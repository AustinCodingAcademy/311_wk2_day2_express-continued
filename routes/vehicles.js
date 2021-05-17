const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
const vehiclesController = require("../controllers/vehicles")

//VEHICLES REQUESTS

router.get("/vehicles", vehiclesController.list)

router.get("/vehicles/:id", vehiclesController.show)

router.post("/vehicles", vehiclesController.create)

module.exports = router
