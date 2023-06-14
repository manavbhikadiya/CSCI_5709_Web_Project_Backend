const User = require("../models/user");

exports.helloworld = () => {
  return "This is Backend";
};

exports.signUp = async (requestBody) => {
  try {
    const user = new User(requestBody);
    return await user.save();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
