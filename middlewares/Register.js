const {body, validationResult} = require('express-validator');

exports.RegisterValidation = [
    body('email', 'Please enter a email address').isEmail().notEmpty(),
    body('password', 'Please enter a password').isLength({min: 6}).notEmpty(),
]

exports.LoginValidation = [
    body('email', 'Please enter a email address').isEmail().notEmpty(),
    body('password', 'Please enter a password').isLength({min: 6}).notEmpty(),
]
exports.Validation = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
}