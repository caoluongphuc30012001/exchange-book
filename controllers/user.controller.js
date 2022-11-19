const UserModel = require("../models/user.model");
class UserController {
  //---------- Login to system --------------------
  loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(username);
      const user = await UserModel.findOne({
        username: username,
      });
      console.log(user);
      if (user) {
        //---------- user exists----------
        if (user.password === password) {
          //------------- user if not comfirm -------------------------

          //---------- Login successful --------------------
          const dataRespone = {
            user: { ...user.toObject(), password: "***" },
          };
          const respone = {
            code: 102,
            message: "Login successful",
            data: dataRespone,
          };
          res.status(200).send(respone);
        } else {
          const respone = {
            code: 103,
            message: "Login failed, your password is not correct",
          };
          res.status(200).send(respone);
        }
      } else {
        //---------- user is not exists -------------
        const respone = {
          code: 110,
          message: "User is not exist, please register",
        };
        res.status(200).send(respone);
      }
    } catch (error) {
      res.send({ message: error.message });
    }
  };
  //------- Create User ----------------
  createUser = async function (req, res) {
    try {
      const { name, username, password, email } = req.body;
      const user = await UserModel.findOne({ username: username });
      if (!user) {
        // const code = Math.floor(Math.random() * 100000);
        const newUser = new UserModel({ name, username, password, email });
        await newUser.save();
        const respone1 = {
          code: 0,
          message: "Register successful",
        };
        res.status(200).send(respone1);
      } else {
        const respone = {
          code: 1,
          message: "Username was used",
        };
        res.status(200).send(respone);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  };

  //------- Get detail user information   --------------------------------
  getDetailUser = async function (req, res) {
    try {
      const { userId } = req.body;
      const user = await UserModel.findById(userId);
      if (user) {
        const dataRespone = {
          user: { ...user.toObject(), password: "" },
        };
        const respone = {
          code: 102,
          message: "Login successful",
          data: dataRespone,
        };
        res.status(200).send(respone);
      } else {
        const respone = {
          code: 115,
          message: "No user have this userId",
        };
        res.status(200).send(respone);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
module.exports = new UserController();
