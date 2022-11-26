var express = require("express");
const bookController = require("../controllers/book.controller");
var router = express.Router();

/* GET users listing. */
router.post("/upload-book", bookController.uploadBook);
router.get("/get-all-available-books", bookController.getAllAvailableBooks);
router.get("/get-all-books/:uId", bookController.getAllBooksByUser);

router.delete("/remove-book", bookController.removeBook);
router.put("/update-book", bookController.updateBook);
module.exports = router;
