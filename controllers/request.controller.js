const RequestModel = require("../models/request.model");

class RequestController {
  async createRequest(req, res) {
    const { uId, bookId } = req.body;
    const newRequest = new RequestModel({ user: uId, book: bookId });
    await newRequest.save();
    res.status(200).send({
      code: 0,
      message: "Request success",
    });
  }

  async getRequestsByUser(req, res) {
    const { userId } = req.params;
    let listRequest = await RequestModel.find({})
      .populate("user")
      .populate("book");
    listRequest = listRequest.filter((item) => item.book.uId === userId);
    res.status(200).send({
      code: 0,
      message: "Get list success",
      data: listRequest,
    });
  }
}

module.exports = new RequestController();
