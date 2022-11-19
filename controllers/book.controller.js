const BookModel = require("../models/book.model");
const UserModel = require("../models/user.model");

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
  async getAllAvailableBooks(req, res) {
    try {
      const data = [];
      const users = await UserModel.find({});
      for (let user of users) {
        const books = await BookModel.find({uId: user._id});
        const availableBooks = books.filter((item) => item.isHaving);
        for (let book of availableBooks) {
          data.push({
            uId: user._id,
            fullUserName: user.name,
            bookId: book._id,
            bookImg: book.image,
            bookDesc: book.description
          })
        }
      }
      res.status(200).send(data)
    } catch (error) {
      res.status(500).send({error})
    }
  }
  async getAllBooksByUser(req, res) {
    try {
      const uId = req.params.uId;
      const books = await BookModel.find({uId: uId});
      const availableBooks = books.filter((item) => item.isHaving);
      const wishBooks = books.filter((item) => !item.isHaving);
      const data = {
        availableBooks: availableBooks,
        wishBooks: wishBooks
      }
      res.status(200).send(data)
    } catch (error) {
      res.status(500).send({error})
    }
  }
}
module.exports = new BookController();
