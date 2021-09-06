const hotels = require("../controllers/hotel.controller.js");
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

    // Create a new Tutorial
    app.post("/api/hotels", 
    [authJwt.verifyToken],
    hotels.create);
  
    // Retrieve all Tutorials
    app.get("/api/hotels", 
    [authJwt.verifyToken],
    hotels.findAll);
  
    // Retrieve a single Tutorial with id
    app.get("/api/hotels/:id", 
    [authJwt.verifyToken],
    hotels.findOne);
  
    // Update a Tutorial with id
    app.put("/api/hotels/:id", 
    [authJwt.verifyToken],
    hotels.update);
  
    // Delete a Tutorial with id
    app.delete("/api/hotels/:id", 
    [authJwt.verifyToken],
    hotels.delete);
  
    // Delete all Tutorials
    app.delete("/api/hotels", 
    [authJwt.verifyToken],
    hotels.deleteAll);

  };