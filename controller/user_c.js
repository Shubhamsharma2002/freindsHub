const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user',{
           title:"user"
    });
}

module.exports.SignUp = function(req,res){
    return res.render('user_signup', {
        title:"freindsHub | SignUp "
    })
}

module.exports.SigIn = function(req,res){
    return res.render('user_signin', {
        title:"freindsHub | SignIn "
    })
}

// get the signup data

module.exports.create = function(req,res){
    // todo later
    if(req.body.password != req.body.cnf_password){
    return res.redirect('back');
    }
    User.findOne({email:req.body.email}, function(err,user){
        if(err){console.log('error in finding user in sign up '); return}
           
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user in sign up '); return}
                return res.redirect('/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    })
    
}

// sesion 

module.exports.createsession = function(req,res){
    // to do later
}