const ErrorHandler = require("../utils/errorHandler");

exports.checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    // res.status(401).json({
    //     success: false,
    //     message: "Please Login to access this resource",
    // })
    return next(new ErrorHandler("Please Login to access this resource", 401));
}

exports.checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    // res.status(401).json({
    //     success: false,
    //     message: "Please Login to access this resource",
    // })

    return next(new ErrorHandler("Please Login to access this resource", 401));
}