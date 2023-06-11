const User = require("../models/user.model");

exports.findUserByUsername = function (req, res) {
  const username = req.params.username;
  console.log("Find User with username ", username);

  User.findUserByUsername({ username: username }, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in finding user with username:${username}`);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in finding user");
    }
  });
};
