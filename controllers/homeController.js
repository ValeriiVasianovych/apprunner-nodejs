const path = require("path");

exports.getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

exports.getAboutPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
};
