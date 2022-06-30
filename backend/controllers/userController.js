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

exports.userDetails = catchAsyncErrors(async (req, res) => {

    const { username, name, email } = req.body;
    const id = uuidv4().replace(/-/g,"");
    const avatarPath = "this is sampe data";
 
    const d = new Date();
    const createdAt = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

    const updatesAt = createdAt;



    const metadata = await pool.query(
        `INSERT INTO metadata (id, username , name ,email ,
            avatar, createdat, updatesat )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
        [id, username, name, email, avatarPath, createdAt, updatesAt]
    )
    
    console.log("hello2");
    res.status(201).json({
        success: true,
        userData: metadata.rows[0]
    })

})