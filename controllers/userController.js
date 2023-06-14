const UserService = require("../services/userServices");

exports.helloWorld = async (req, res) => {
  try {
    const data = await UserService.helloworld();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

exports.signUp = async (req, res) => {
  try {
    const response = await UserService.signUp(req.body);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
