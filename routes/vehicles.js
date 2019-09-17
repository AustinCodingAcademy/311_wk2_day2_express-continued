const express = require("express");
const router = express.Router();

router.get("/vehicles", (req, res) => {
	res.json(comments);
});

router.get("/vehicles/:vehicleId", (req, res) => {
	let id = comments.find(i => i._id == req.params.vehicleId);
	res.json(id);
});

router.post("/vehicles", (req, res) => {
	let newVehicle = req.body;
	vehicles.push(newVehicle);
	res.json(newVehicle);
});

module.exports = router;
