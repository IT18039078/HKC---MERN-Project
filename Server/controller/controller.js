// import the bcrypt module to secure the password
const bcrypt = require('bcrypt');
const User = require("../models/consumer");
const jwt = require('jsonwebtoken');


// here we should code for the api handlings
// controller for regitser user
exports.registerUser = (req,res)=>{
    try {

        // writing validation is that body contain details or not
        if(!req.body){
               return res.status(406).json({err: "Have to fill the form before submit"})
        }
        let {email,firstName, lastName, password, passwordCheck} = req.body
        // check every field have value
        if(!email || !firstName ||  !lastName || !password || !passwordCheck){
               return res.status(406).json({err: "Fill all the field without empty field"})
        }

        if( password.length < 8){
                res.status(406).json({err: "The password length is small, please re try"})
        }

        if(password !== passwordCheck){
            res.status(406).json({err : "The passwor and confirm passwords are not same"})
        }

        // here we will secure the password 
        const hash =bcrypt.hashSync(password,10)

        // using document structure 
        const newUser = new User({
            email,
            firstName,
            lastName,
            password: hash 
        })
         
        newUser
          .save(newUser)
          .then(register=>{
            res.json(register)    
          })
          .catch(error=>{
              res.status(406 ).json({err : error.message || "There was some error in process"})
          })

    } catch (error) {
         res.status(500).json({err: error.messagge || "error while register user"})
    }
    
}

// controller for login
exports.login = async (req,res)=>{
    try {
        if(!req.body){
            res.status(406).json({err:"Fille the login form and login"})
        }

        const {email, password} = req.body
    
        if( !email || !password)
            res.status(406).json({err:"Please fille all the field in login form"})
        
        
        const user =  await User.findOne({email});
        
        if(!user){
            return res.status(406).json({err: "No account with this email"});
        }
            
            
        // compare the passowrd 
        const isMatch =    await bcrypt.compare(password, user.password);

        if(!isMatch) return res.status(406).json({err: "Invalid credentials"});

        // JWT implementation
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        res.json({token, email: user.email,firstName: user.firstName})

    } catch (error) {
        return res.status(500).json({err: error.messagge || "error while login user"})
    }
}

// delete user controler
exports.delete = async (req,res)=>{
    try {
        await User.findByIdAndRemove(req.user_id)
        res.json({msg: "User Deleted Successfully...!"})
    } catch (error) {
        return res.status(406).json({err: error.message || "Error while deleting"})
    }
}

// delete user controler
exports.deleteProduct = async (req,res)=>{
    try {
        await User.findByIdAndRemove(req.product_id)
        res.json({msg: "Product Deleted Successfully...!"})
    } catch (error) {
        return res.status(406).json({err: error.message || "Error while deleting"})
    }
}

// add product 
exports.addProduct = (req,res)=>{
    try {

        // writing validation is that body contain details or not
        if(!req.body){
               return res.status(406).json({err: "Have to fill the form before submit"})
        }
        let {product_name,product_price, product_image,product_description} = req.body
        // check every field have value
        if(!product_name || !product_price ||  !product_image || !product_description){
               return res.status(406).json({err: "Fill all the field without empty field"})
        }


        // using document structure 
        const newProduct = new User({
            product_name,
            product_price,
            product_image,
            product_description
        })
         
        newProduct
          .save(newProduct)
          .then(product=>{
            res.json(product)    
          })
          .catch(error=>{
              res.status(406 ).json({err : error.message || "There was some error in process"})
          })

    } catch (error) {
         res.status(500).json({err: error.messagge || "error while add product"})
    }
    
}