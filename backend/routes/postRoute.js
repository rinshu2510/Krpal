const express = require("express");
const { postContent, allPost, images } = require("../controllers/postController");
const { checkNotAuthenticated } = require("../middleware/auth");
const router = express.Router();



router.post("/post", checkNotAuthenticated, postContent);
router.get("/posts", checkNotAuthenticated, allPost);
router.post("/upload",checkNotAuthenticated,images);

module.exports = router;
