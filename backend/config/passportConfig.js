const LocalStrategy = require("passport-local").Strategy;
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");

function initialize(passport) {
    // console.log("Initialized");

    const authenticateUser = async (email, password, done) => {


        try {
            const user = await pool.query(
                `SELECT * FROM users WHERE email = $1`,
                [email]);

            if (user.rows.length === 0) {
                return done(null, false, { message: "No user with this email" })
            }

            try {

                if (await bcrypt.compare(password, user.rows[0].password)) {
                    return done(null, user.rows[0]);
                } else {
                    return done(null, false, { message: "password incorrect" })
                }

            } catch (err) {
                return done(err);
            }
        }
        catch (err) {
            return done(err);
        }

    };

    passport.use(
        new LocalStrategy(
            { usernameField: "email", passwordField: "password" },
            authenticateUser
        )
    );

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(async (id, done) => {

        try {
            const user = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

            // console.log(`ID is ${user.rows[0].id}`);
            return done(null, user.rows[0]);

        }
        catch (err) {
            return done(err);
        }
    });
}

module.exports = initialize;