import React from 'react';
import { Link } from 'react-router-dom' 
import '../CSS/Login.css';
import Header from '../components/Header'
import icon from '../icons/user.png'

const props = {icon, route: '/'}
export default Login => {
    return (
        <>
        <Header {...props}/>
     <div className = 'login'>
         <img  src = {icon} alt = "icone usuario"/>
         <label> Usuario </label>
         <input />

         <label> Senha </label>
         <input type = "password"/>

        <a href="https://www.houseofcaju.com.br/login"> Criar Conta</a>
        <a href = "#/"> Esqueci minha senha</a>
        <Link to = "/"><button type = 'submit' > Enviar </button></Link>
     </div>
     </>
    )
}