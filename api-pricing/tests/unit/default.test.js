const app = require("../../server.js"); 
const supertest = require("supertest");
const request = supertest(app);

  // We describe the test
  describe("GET / DEFAULT TESTS", () => {
    // Api Success Test
    it("it should TestOk default test", async done => {
        // We call the routes
        const response = await request.get("/api/testOk");
        // We get the status
        const data = response.status;
        // We expect the status to be Success
        expect(data).toBe(200);
      done();
    });
    // Api Error Test
    it("it should TestBadRequest default test", async done => {
        // We call the routes
        const response = await request.get("/api/testBadRequest");
        // We get the status
        const data = response.status;
        // We expect the status to be Error
        expect(data).toBe(404);
      done();
    });
    // Api Authorize Test
    it("it should TestAuthorize default test", async done => {
        // We call the routes
        const response = await request.get("/api/testAuthorize");
        // We get the status
        const data = response.status;
        // We expect the status to be Unauthorize
        expect(data).toBe([401,403]);
      done();
    });
  });