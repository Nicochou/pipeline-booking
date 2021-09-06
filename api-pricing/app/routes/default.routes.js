const { authJwt } = require("../middleware");
const controller = require("../controllers/default.controller");

module.exports = function(app) {
  // We set the Headers
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // We test the api route OK - 200
  app.get("/api/testOk", 
  controller.testOk);

  // We test the api route Bad Request - 400
  app.get("/api/testBadRequest", 
  controller.testBadRequest);

  // We test the api route Unauthorize
  app.get("/api/testAuthorize", 
  [authJwt.verifyToken],
  controller.testAuthorize
  );
};