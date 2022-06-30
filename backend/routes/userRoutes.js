const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logout, userDetails } = require("../controllers/userController");
const { checkNotAuthenticated, checkAuthenticated } = require("../middleware/auth");


router.get("/", (req, res) => {
    res.send("index page")
});

router.get("/users/dashboard", checkNotAuthenticated, (req, res) => {

    res.status(200).json({
        success: true,
        user: req.user
    });
})

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.post("/userdetail",checkNotAuthenticated,userDetails);

module.exports = router;