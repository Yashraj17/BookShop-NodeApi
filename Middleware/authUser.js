const jwt = require('jsonwebtoken');
const UserModel = require('../Model/userModel');
const CustomError = require('../utils/CustomError');

const protect = async (req,res,next)=>{

    let token;
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token,"hellomynameisyash");
            req.user = await UserModel.findById(decode.userId).select('-password')
            next()
        } catch (error) {
            return next(new CustomError('You are Unauthorized', 401));
        }
    }

}
module.exports =protect