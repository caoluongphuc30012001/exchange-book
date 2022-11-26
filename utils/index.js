const checkIdMongoose = (id) => {
  var ObjectId = require("mongoose").Types.ObjectId;
  return ObjectId.isValid(id);
};

module.exports = { checkIdMongoose };
