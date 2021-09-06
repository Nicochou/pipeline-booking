const services = require("../controllers/service.controller.js");
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

    // Create a new Service
    app.post("/api/services", 
    [authJwt.verifyToken],
    services.create);
  
    // Retrieve all Services
    app.get("/api/services", 
    [authJwt.verifyToken],
    services.findAll);
  
    // Retrieve a single Service with id
    app.get("/api/services/:id", 
    [authJwt.verifyToken],
    services.findOne);
  
    // Update a Service with id
    app.put("/api/services/:id", 
    [authJwt.verifyToken],
    services.update);
  
    // Delete a Service with id
    app.delete("/api/services/:id", 
    [authJwt.verifyToken],
    services.delete);
  
    // Delete all Services
    app.delete("/api/services", 
    [authJwt.verifyToken],
    services.deleteAll);

  };