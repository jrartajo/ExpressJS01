const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req, res) => {
  res.send("user new form");
});

router.post("/", (req, res) => {
  res.send("create user");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })

  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })

  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
    console.log(id)
    next()
})
module.exports = router;
