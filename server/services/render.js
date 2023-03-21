const axios = require('axios');

exports.indexRoute = (req,res)=>{
    res.locals.err = "success";
    res.render('index');
}

exports.signupRoute = (req,res)=>{
    res.render('signUp');
}