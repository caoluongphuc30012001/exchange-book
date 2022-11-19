const BookModel = require("../models/book.model");

class BookController {
  async uploadBook(req, res) {
    try {
      const data = req.body;
      const newBook = new BookModel(data);
      await newBook.save();
      res.status(200).send({
        code: 0,
        message: "Upload book success",
      });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
}
module.exports = new BookController();
