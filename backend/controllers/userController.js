const { pool } = require("../config/dbConfig");
const bcrypt = require('bcrypt');
const passport = require("passport");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.registerUser = catchAsyncErrors(async (req, res) => {
    const { name, email, password, password2 } = req.body;
    const errors = [];

    if (!name || !email || !password || !password2) {
        errors.push({ message: "Please enter all fields" });
    }

    if (password.length < 6) {
        errors.push({ message: "Password must be a least 6 characters long" });
    }

    if (password !== password2) {
        errors.push({ message: "Passwords do not match" });
    }

    if (errors.length > 0) {

        res.status(400).json({
            success: false,
            message: errors,
        });
    }

    else {

        try {

            const hashedPassword = await bcrypt.hash(password, 10);
            // console.log(hashedPassword);
            const newUser = await pool.query(
                `INSERT INTO users (name, email, password)
                  VALUES ($1, $2, $3)
                  RETURNING *`,
                [name, email, hashedPassword]
            )
            // console.log(newUser.rows[0]);
            res.status(201).json({
                success: true,
                user: newUser.rows[0]
            })

        } catch (err) {

            res.status(500).json({
                success: false,
                message: err.message,
            })
        }

    }
});

exports.loginUser = (req, res, next) => {

    passport.authenticate("local", (err, user, info) => {
        if (err)
            throw err;
        if (!user) {
            // res.status(401).json({
            //     success: false,
            //     message: info.message,
            // })
            return next(new ErrorHandler(info.message, 401));
        }
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.status(200).json({
                    success: true,
                    message: "successfully Authenticated",
                    user: req.user
                })
            })
        }
    })(req, res, next);

}

exports.logout = catchAsyncErrors((req, res) => {

    req.logout();
    res.status(200).json({
        success: true,
        message: "You have logged out successfully"
    })
});

exports.getUserDetails = catchAsyncErrors((req, res) => {

    const user = req.user;

    res.status(200).json({
        success: true,
        user,
    })

})