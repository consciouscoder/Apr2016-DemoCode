// users.js (controller)

// Requiring the model so we can run methods on it
var User = require('../models/userModel.js')

module.exports = {
    
    create : function(req, res){
        
        // if(!req.body.email || !req.body.username || !req.body.password){
        //     return res.send({err : 'Fill out the form bozo'})
        // }
        
        var newGuy = new User(req.body)
        newGuy.save(function(err, doc){
            if(err) return res.send(err)
            res.send(doc)
        })
    },
    
    find   : function(req, res){
        User.find({}, function(err, users){
            if(err) return res.send(err)
            res.send(users)
        })
    },
    
    update : function(req, res){
        // findOneAndUpdate - may need a special option to get the updated version
        User.update({_id : req.params.id}, req.body, function(err, update){
            if(err) return res.send(err)
            res.send(update)
        })
    },
    
    delete : function(req, res){
        User.remove({_id : req.params.id}, function(err, deleted){
            if(err) return res.send(err)
            res.send(deleted)
        })
    }
    
}