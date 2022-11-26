var express = require("express");
const requestController = require("../controllers/request.controller");
var router = express.Router();

/* GET users listing. */
router.delete("/accept-request", requestController.acceptRequest);
module.exports = router;
