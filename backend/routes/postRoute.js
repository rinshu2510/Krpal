const express = require("express");
const { postContent, allPost } = require("../controllers/postController");
const { checkNotAuthenticated } = require("../middleware/auth");
const router = express.Router();



router.post("/post", checkNotAuthenticated, postContent);
router.get("/posts", checkNotAuthenticated, allPost);


module.exports = router;
