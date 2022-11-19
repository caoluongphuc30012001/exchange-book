var express = require("express");
const bookController = require("../controllers/book.controller");
var router = express.Router();

/* GET users listing. */
router.post("/upload-book", bookController.uploadBook);
router.get("/get-all-available-books", bookController.getAllAvailableBooks);
router.get("/get-all-books/:uId", bookController.getAllBooksByUser);

module.exports = router;
