import React, { Component } from 'react';

import FooterPart from '../components/footer/footer';
import PersonalizeBody from '../components/HomeBody/personalizeBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedNav from '../components/NavBar/LoggedNav';

export default function Personalize() {
        return (
            <div>
                <LoggedNav/>
                <PersonalizeBody/>
                <FooterPart/>
            </div>
        );
    
}

