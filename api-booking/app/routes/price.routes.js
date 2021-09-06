const prices = require("../controllers/price.controller.js");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    // We set the Headers
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    // Retrieve the price
    app.get("/api/price",
    [authJwt.verifyToken],
    prices.getPrice);
  
};