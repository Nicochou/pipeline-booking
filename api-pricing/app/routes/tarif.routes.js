const tarifs = require("../controllers/tarif.controller.js");
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

    // Create a new Tarif
    app.post("/api/tarifs", 
    [authJwt.verifyToken],
    tarifs.create);
  
    // Retrieve all Tarifs
    app.get("/api/tarifs", 
    [authJwt.verifyToken],
    tarifs.findAll);
  
    // Retrieve a single Tarif with id
    app.get("/api/tarifs/:id", 
    [authJwt.verifyToken],
    tarifs.findOne);
  
    // Update a Tarif with id
    app.put("/api/tarifs/:id", 
    [authJwt.verifyToken],
    tarifs.update);
  
    // Delete a Tarif with id
    app.delete("/api/tarifs/:id", 
    [authJwt.verifyToken],
    tarifs.delete);
  
    // Delete all Tarifs
    app.delete("/api/tarifs", 
    [authJwt.verifyToken],
    tarifs.deleteAll);

  };