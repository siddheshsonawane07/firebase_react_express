const admin = require('../config/firebase-config')

class Middleware{
    async decodeToken(req,res,next){
        const token = req.headers.authorization.split(" ");
        admin.auth().verifyIdToken(token).then(decodedIdToken=>{
            console.log("Id token decoded", decodedIdToken);
        })
        try{
            if(decodeValue){
                return next();
            }
            return res.json({message:'unauthorized access'});
        }catch(e){
            return res.json({message:'internal error'});
        }
    }
}

module.exports = new Middleware();