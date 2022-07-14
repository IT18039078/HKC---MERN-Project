import React, { Component, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBody from '../components/HomeBody/homeBody.jsx';
import FooterPart from '../components/footer/footer.jsx';
import LoggedNav from '../components/NavBar/LoggedNav.jsx';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function LHome()  {
   
        
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"7a3ddd6f9ad54a22612d1bac61ba399e","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    
    // THIS WHOLE CODE IS USED TO CHECK WHETHER THE USER ALREADY 
    // SIGNED IN OR NO
    // IF NOT THIS WILL REDIRECT TO SIGN IN PAGE
    const route = () =>{
        const token = localStorage.getItem('x-access-token')
        return token ? true: false
    }
       const user = useSelector(state => state.isLoggedIn)   
       const history = useNavigate()
       useEffect(()=>{
            if(!route()){
                history("/SignIn")
            }
       },[route(), history])
    //    END OF THE LOGIN  CHECKING
        return (
            <div>
                <LoggedNav/>  
                <HomeBody/>
                <FooterPart/>
            </div>
        );
    
}
 