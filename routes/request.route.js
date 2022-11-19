const express = require("express");
const router = express.Router();
const requestController = require("../controllers/request.controller");
router.post("/create-request", requestController.createRequest);

module.exports = router;
