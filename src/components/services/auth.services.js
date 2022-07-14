import axios from "axios";


const baseURL  = "http://localhost:3001/api";
// register new user 
const resister = (newUser) =>{
// POST request on http://3002/api/reigisterUser
return axios.post( `${baseURL}/registerUser`,newUser)
    .then(response =>{
        if(response){
            return Promise.resolve(response)
        }
    })
    .catch(error =>{
        return Promise.reject(error.response)
    })
}

// create login request service
 const loginService = (userCredential) =>{
    // POST request on http://3002/api/reigisterUser
    return axios.post( `${baseURL}/login`,userCredential)
   .then(response =>{
       if(response.data.token){
           localStorage.setItem('x-access-token',response.data.token)    
       }

       return  Promise.resolve(response.data)
   })
   .catch(error =>{
       return Promise.reject(error.response.data)
   })
 }

 const logout = () =>{
    localStorage.removeItem('x-access-token')
    return {msg: "logout successfully"}
 }

 export{
     resister,
     loginService,
     logout
 }