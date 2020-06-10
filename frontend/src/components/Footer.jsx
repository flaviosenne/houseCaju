import React from 'react';
import '../CSS/Footer.css';

import logo from '../icons/logo.webp'
import face from '../icons/facebook.png'
import fundo from '../img/fundo.jpg'
import adress from '../icons/adress.png'
import msg from '../icons/msg.webp'
import tell from '../icons/tell.png'
import wats from '../icons/wats.webp'


export default Footer => {
    return (
        <div className="footer">
            <div>
                <img className = "logo"src={logo} alt="logo"/>
            </div>

            <div className = "info">

                <div className = "contato">
                    <p className = "fale"> FALE CONOSCO </p>

                    <img src = {msg}/><p> contato@houseofcaju.com.br </p>

                    <img src = {adress}/>
                        <p> Rua Carlos Do Carmo,161<br/>
                            Cidade Nova - Franca - SP<br/>
                            CEP: 14401133<br />
                        </p>                   
                        <p> 
                            < img src = {tell}/>(16) 3721-7614 <br />
                            < img src = {wats}/>(16) 99186-4587
                        </p>          
                
                </div>   
                <div className = "minha_conta">
                    <p> MINHA CONTA</p>
                    
                    <a href = "https://www.houseofcaju.com.br/central-de-atendimento"> Entre em Contato</a>
                    <a href = "https://www.houseofcaju.com.br/login"> Meus Dados </a>
                    <a href = "https://www.houseofcaju.com.br/login"> Meus Pedidos</a>
                    <a href = "https://www.houseofcaju.com.br/login"> Rastrear Encomenda</a>
                    <a href = "https://www.houseofcaju.com.br/login-programa-de-afiliados"> Area do Afiliado</a>
                    <a href = "https://www.houseofcaju.com.br/mapa-do-site"> Mapa do Site </a>
                </div>
            
                <div className = "rede_social">
                    <p> REDES SOCIAIS</p>

                    <div>
                        <a href = "https://www.facebook.com/houseofcaju/"><p className= "titulo_house"> House of Caju</p></a>
                        < img className = "facebook"src = {logo}/>
                        <a href = "https://www.facebook.com/houseofcaju/"><button className = "facebook_btn"> Curtir</button></a>
                        < img className = "iconfacebook"src = {face}/>
                        <img src = {fundo}/>
                        <p> Seja a primeira pessoa entre seus amigos a curtir isso</p>
                    < img />
                    </div>

                </div>
            </div>   
        
        </div>
    )
}