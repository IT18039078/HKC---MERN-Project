const { json } = require('express');
const jwt = require('jsonwebtoken')

// create a midlleware
const auth = (req,res,next)=>{
    const token = req.header('x-access-token');
    
    if(!token){
        return res.status(406).json({err:"No authentication token, authorization denied"})
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    
    if(!verified)
        return res.status(406).json({err: "Toern  verification failede, authorization denied"});
    
        
    req.user_id = verified.id;
    console.log(token,verified,req.user_id)
    next()
}

module.exports = auth