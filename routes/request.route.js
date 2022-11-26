var express = require("express");
const requestController = require("../controllers/request.controller");
var router = express.Router();

/* GET users listing. */
router.delete("/accept-request", requestController.acceptRequest);
router.post("/create-request", requestController.createRequest);
router.get("/get-request/:userId", requestController.getRequestsByUser);

module.exports = router;
