import React from 'react';
import '../CSS/Header.css';
import logo from '../icons/logo.webp'
import pesquisa from '../icons/search.png'
import { Link } from 'react-router-dom'
export default props => {
    return (
        <div className = "header">
            <Link to = {props.route}>
                <img className = "icon-menu" src={props.icon} alt="icone home"/>
            </Link>
            <img className = "logo"src={logo} alt="logo"/>
            
            <div className = "busca">

                <input className = "pesquisa" placeholder = "Buscar"type = "text"/>
                <img className = "search"src={pesquisa} alt="logo"/>
            </div>
             
            
        </div>
    )
}