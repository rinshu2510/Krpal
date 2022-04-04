const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const initializePassport = require("./config/passportConfig")
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");

dotenv.config({ path: "backend/config/config.env" })


initializePassport(passport);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }

}));

app.use(passport.initialize());
app.use(passport.session());

//Route imports
const user = require("./routes/userRoutes");

app.use('/api/v1', user);

app.use(errorMiddleware);


module.exports = app;