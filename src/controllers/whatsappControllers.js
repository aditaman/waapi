const VerifyToken = (req, res) => {
  res.send("verify token");
};

const receivedMessage = (req, res) => {
  res.send("received message");
};

module.exports = {
  VerifyToken,
  receivedMessage,
};
