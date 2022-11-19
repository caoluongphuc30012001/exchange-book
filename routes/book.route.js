var express = require("express");
const bookController = require("../controllers/book.controller");
var router = express.Router();

/* GET users listing. */
router.post("/upload-book", bookController.uploadBook);

module.exports = router;
