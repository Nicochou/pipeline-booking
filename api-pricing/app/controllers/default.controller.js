exports.testOk = (req, res) => {
    return res.status(200).send({
        message: "OK"
      })
  };
  
exports.testBadRequest = (req, res) => {
    return res.status(400).send({
        message: "Bad Request"
      });
};

exports.testAuthorize = (req, res) => {
    res.send().status(401);
};