import React, { Component, useEffect } from 'react';
import FooterPart from '../components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedNavBar from '../components/NavBar/LoggedNav';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardD from '../components/CardD/CardD';

export default function CardDesign(){
        return (
            <div>
                <LoggedNavBar/>
                <CardD/>
                <FooterPart/>
            </div>
        );   
}
 