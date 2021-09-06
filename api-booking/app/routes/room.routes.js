const rooms = require("../controllers/room.controller.js");
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
    // Create a new Room
    app.post("/api/rooms", 
    [authJwt.verifyToken],
    rooms.create);
  
    // Retrieve all Rooms
    app.get("/api/rooms",
    [authJwt.verifyToken],
    rooms.findAll);
  
    // Retrieve all available Rooms
    app.get("/api/rooms/available",
    [authJwt.verifyToken], 
    rooms.findAllAvailable);
  
    // Retrieve a single Room with id
    app.get("/api/rooms/:id", 
    [authJwt.verifyToken],
    rooms.findOne);
  
    // Update a Room with id
    app.put("/api/rooms/:id", 
    [authJwt.verifyToken],
    rooms.update);
  
    // Delete a Room with id
    app.delete("/api/rooms/:id", 
    [authJwt.verifyToken],
    rooms.delete);
  
    // Delete all Rooms
    app.delete("/api/rooms",
    [authJwt.verifyToken],
    rooms.deleteAll);
};