import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetailsBody from '../components/cardDetailsview/cardDetailsbody';
import LoggedNav from '../components/NavBar/LoggedNav';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function CardDetailsMain() {

        return (
        <div>
            <LoggedNav/>
            <CardDetailsBody/>
        </div>
        );
    
}
 