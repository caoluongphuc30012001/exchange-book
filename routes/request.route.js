const express = require("express");
const router = express.Router();
const requestController = require("../controllers/request.controller");
router.post("/create-request", requestController.createRequest);
router.get("/get-request/:userId", requestController.getRequestsByUser);

module.exports = router;
