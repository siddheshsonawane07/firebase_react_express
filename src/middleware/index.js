const admin = require('../config/firebase-config')

class Middleware{
    async decodeToken(req,res,next){
        const token = req.headers.authorization.split("")[1];
        const decodeValue = await admin.auth().verifyIdToken(token);
        console.log(decodeValue);
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

module.exports =  new Middleware();