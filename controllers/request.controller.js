const RequestModel = require("../models/request.model");

class RequestController {
  async createRequest(req, res) {
    const { uId, bookBuy, bookSell } = req.body;
    const newRequest = new RequestModel({
      user: uId,
      bookBuy: bookBuy,
      bookSell,
    });
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
      .populate("bookBuy")
      .populate("bookSell");
    listRequest = listRequest.filter((item) => item.bookSell.uId === userId);
    res.status(200).send({
      code: 0,
      message: "Get list success",
      data: listRequest,
    });
  }
}

module.exports = new RequestController();
