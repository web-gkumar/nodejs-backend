const router = require("express").Router();

///Get List
router.get("/", (req, res) => {
    res.send("Get List")
})
///Post List
router.post("/", (req, res) => {
    res.send("Add New Post")
})
///Single List
router.post("/:listId", (req, res) => {
    res.send("Single List")
})
///Update List
router.put("/:listId", (req, res) => {
    res.send("Update List")
})
///Single List
router.delete("/:listId", (req, res) => {
    res.send("Delete List")
})


module.exports = router;