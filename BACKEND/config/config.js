// Example configuration file

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'MyScretKey',  // JWT secret key
    mongoURI: process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/MakeMyTripDB',  // MongoDB connection URI
    // Add more configuration variables as needed
    //'mongodb://0.0.0.0:27017/MakeMyTripDB'
};
