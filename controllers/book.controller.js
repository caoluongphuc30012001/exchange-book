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
      res.status(500).send({ error });
    }
  }
  async getAllAvailableBooks(req, res) {
    try {
      const data = [];
      const users = await UserModel.find({});
      for (let user of users) {
        const books = await BookModel.find({uId: user._id});
        const availableBooks = books.filter((item) => item.isHaving);
        data.push({
          uId: user._id,
          name: user.name,
          availableBooks: availableBooks,
        })
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
