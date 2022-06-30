const { pool } = require("../config/dbConfig");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.postContent = catchAsyncErrors(async (req, res, next) => {

    const { content } = req.body;
    if (!content) {
        return next(new ErrorHandler("Please write any content", 401));
    }
    const d = new Date();

    const postAt = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    const temp = req.user;
    const email = temp.email;
    const name = temp.name;
    const link = "this is sample link";

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const time = hours + ':' + minutes + ' ' + ampm;

    const postDetail = await pool.query(`INSERT INTO userpost (name, email,
         content, postdate, time, image)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [name, email, content, postAt, time, link]
    )

    res.status(201).json({
        success: true,
        postData: postDetail.rows[0]
    })

});

exports.allPost = catchAsyncErrors(async (req, res, next) => {

    const email = req.user.email;

    const posts = await pool.query(`SELECT  * FROM userpost WHERE email = $1 `, [email]);

    res.status(200).json({
        sucsess: true,
        posts: posts.rows
    })

})