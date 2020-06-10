import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css';
import App from './App'



// images bags
import bag1 from '../img/bolsa1.webp'
import bag2 from '../img/bolsa2.webp'
import bag3 from '../img/bolsa3.webp'
import bag4 from '../img/bolsa4.webp'
import bag5 from '../img/bolsa5.webp'
import bag6 from '../img/bolsa6.webp'
import bag7 from '../img/bolsa7.webp'
import bag8 from '../img/bolsa8.webp'
import bag9 from '../img/bolsa9.webp'
import bag10 from '../img/bolsa10.webp'



export default App2 => {
  return (
    <>
    <App/>
        <div className = "destaque">
            <p> COMPANHEIRAS PARA O DIA A DIA </p>
        </div>
        <br />
        <hr />
      <div className='landingPage'>


        <div>
          <img src={bag1} alt="icone cifrão" />
          <p>
          HCDOROTHEAWERNECK -
          HC1184RSAMLSOR     
          
          <strong>R$ 399,00 </strong><br/>

        10x <strong>de</strong> R$ 39,90 <strong>sem juros</strong>
        <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>

        <div>
          <img src={bag2} alt="icone relatorio" />

          <p>
          HCVIOLETA - HC11302OWLSOX
    
          <strong>R$ 349,00</strong>

          10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
          <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>


        <div>
          <img src={bag3} alt="icone cifrão" />
          <p>
          HCANAMONTENEGRO -
          HC1184VTLJLSOR  
          
          <strong>R$ 399,00 </strong><br/>

        10x <strong>de</strong> R$ 39,90 <strong>sem juros</strong>
        <Link to="/login" ><button> COMPRAR AGORA</button></Link>
        </p>
        </div>

        <div>
          <img src={bag4} alt="icone relatorio" />

          <p>
          HCVIOLETA - HC11302OWLSOX
    
          <strong>R$ 349,00</strong>

          10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
          <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>
        <div>
          <img src={bag5} alt="icone relatorio" />

          <p>
          HCVIOLETA - HC11302OWLSOX
    
          <strong>R$ 349,00</strong>

          10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
          <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>
        <div>
          <img src={bag6} alt="icone relatorio" />

          <p>
          HCVIOLETA - HC11302OWLSOX
    
          <strong>R$ 349,00</strong>

          10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
          <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>
        <div>
          <img src={bag7} alt="icone relatorio" />

          <p>
          HCVIOLETA - HC11302OWLSOX
    
          <strong>R$ 349,00</strong>

          10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
          <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>
        <div>
          <img src={bag8} alt="icone relatorio" />

          <p>
          HCVIOLETA - HC11302OWLSOX
    
          <strong>R$ 349,00</strong>

          10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
          <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>
        {/* <div className = "destaque">
            <p> COMPANHEIRAS PARA O DIA A DIA </p>
        </div> */}
        <div>
          <img src={bag9} alt="icone relatorio" />

          <p>
          HCVIOLETA - HC11302OWLSOX
    
          <strong>R$ 349,00</strong>

          10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
          <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>
        <div>
          <img src={bag10} alt="icone relatorio" />

          <p>
          HCVIOLETA - HC11302OWLSOX
    
          <strong>R$ 349,00</strong>

          10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
          <Link to="/login" ><button> COMPRAR </button></Link>
        </p>
        </div>

      </div>
    </>
  )
}

