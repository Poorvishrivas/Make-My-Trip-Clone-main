// controllers/authController.js

const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Register a new user
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    console.log(req.body)
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ name, email, password, role });
console.log(user);
       
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

      
        await user.save();

       
        const payload = {
            user: {
                id: user.id,
                
                role: user.role
            }
        };

        jwt.sign(payload, config.jwtSecret, { expiresIn: '3d' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
      
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

     
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

       
        const payload = {
            user: {
                id: user.id,
                name:user.name,
                role: user.role
            }
        };

        jwt.sign(payload, config.jwtSecret, { expiresIn: '3d' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
