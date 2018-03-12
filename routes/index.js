// var express = require('express');
// var router = express.Router();
//
//
// //get homepage
// router.get('/', function(req, res){
//     res.render('index');
// });
// // register
// router.get('/register', function(req, res){
//     res.render('register');
// });
//
// function ensureAuthenticated(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     } else {
//         req.flash('error_msg','You are not logged in');
//         res.redirect('/users/login');
//     }
// }
//
// //login
// router.get ('/login', function(req, res){
//     res.render('login');
// });
// module.exports = router;

var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
    res.render('index');
});

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/users/login');
    }
}

module.exports = router;