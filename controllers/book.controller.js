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
      res.status(500).send({ code: 1, message: error });
    }
  }
  async updateBook(req, res) {
    try {
      const data = req.body;
      await BookModel.findOneAndUpdate(
        { uId: data.uId, _id: data.bookId },
        data
      );
      res.status(200).send({
        code: 0,
        message: "Update book success",
      });
    } catch (error) {
      res.status(500).send({ code: 1, message: error });
    }
  }

  async removeBook(req, res) {
    try {
      const { uId, bookId } = req.body;
      await BookModel.findOneAndDelete({ uId, _id: bookId });
      res.status(200).send({
        code: 0,
        message: "Remove success",
      });
    } catch (error) {
      res.status(500).send({ code: 1, message: error });
    }
  }
}
module.exports = new BookController();
