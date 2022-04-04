const app = require("./app");
const dotenv = require("dotenv");

// Handling uncaught Exception 

process.on("uncaughtException", (err) => {

    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`server is working on port http://localhost:${PORT}`)
})

// Unhandled Promise Rejection

process.on("unhandledRejection", err => {
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server due to unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});