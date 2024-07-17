// middleware/adminAuth.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');
function userAuth(req, res, next) {
    console.log(req.header,"check")
    const token = req.header('Authorization');
  
   
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        console.log(config.jwtSecret,"-->check jwt")
        const removeBerer=token.split(" ");

        const decoded = jwt.verify(removeBerer[1], config.jwtSecret);
      
        if (decoded.user.role==='user') {
           req.user = decoded;
            next();
        } else {
            res.status(403).send('Access denied.');
        }
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}

module.exports = userAuth;
