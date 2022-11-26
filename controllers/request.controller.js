const RequestModel = require("../models/request.model");
const BookModel = require("../models/book.model");

class RequestController {
    acceptRequest = async (req, res) => {
        try {
            const {requestId} = req.body;
            const request = await RequestModel.findById(requestId);
            const bookBuy = request.bookBuy;
            const bookSell = request.bookSell;
            console.log(bookBuy);
            console.log(bookSell);
            await RequestModel.deleteMany({ bookBuy: bookBuy});
            await RequestModel.deleteMany({ bookSell: bookSell});
            await BookModel.findByIdAndDelete(bookSell);
            await BookModel.findByIdAndDelete(bookBuy);
            res.status(200).send({
                code: 0,
                message: "Accept success",
              });
        }
        catch (error){
            res.status(400).send({ code: 1, message: error });
        }
    }
}
module.exports = new RequestController();
