const validator = require('validator');

exports.validation = (req, res, next) =>{
    let errors
    if(req.body.email==="" || req.body.location===""){
        errors = 'All input feild are required!'
    }else if(validator.isEmail(req.body.email)){
        return next();
    }else{
        errors = 'Email is not a valid email'
    }
    res.status(402).json(errors);
}
