import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css';
import App from './App2'




// images bags
import bag17 from '../img/bolsa17.webp'
import bag18 from '../img/bolsa18.webp'
import bag19 from '../img/bolsa19.webp'
import bag20 from '../img/bolsa20.webp'
import bag21 from '../img/bolsa21.webp'
import bag22 from '../img/bolsa22.webp'
import bag16 from '../img/bolsa16.webp'
import bag15 from '../img/bolsa15.webp'


export default App3 => {
  return (
    <>
      <App/>
      
      <div className = "destaque">
            <p>
            COMPANHEIRAS COOL
            </p>
          </div>
          <hr />
          <div className='landingPage'>

            <div>
              <img src={bag17} alt="icone cifrão" />
              <p>
              HCGRAZIELAMACEIELBARROSO - HC11342AMLSOR
              <br />
              <br />
              
              <strong>R$ 249,00 </strong><br/>

              10x <strong>de</strong> R$ 24,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>

            <div>
              <img src={bag18} alt="icone relatorio" />

              <p>
              HCGALCOSTA - HC11200CMLSOR
              <br />
              <br />
        
              <strong>R$ 229,00</strong><br/>

              10x <strong>de</strong> R$ 29,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>


            <div>
              <img src={bag19} alt="icone cifrão" />
              <p>
              HCGABRIELALEITE - HC11200PTLSOR
              <br />
              <br />
              
              <strong>R$ 299,00 </strong><br/>

              10x <strong>de</strong> R$ 29,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR AGORA</button></Link>
              </p>
            </div>

            <div>
              <img src={bag20} alt="icone relatorio" />

              <p>
              HCGUIOMARNOVAES - HC11342CMLSOR
              <br/>
              <br/>
        
              <strong>R$ 249,00</strong><br/>

              10x <strong>de</strong> R$ 24,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>
          

            <div>
              <img src={bag21} alt="icone relatorio" />

              <p>
              HCHELOISAALBERTOTORRES - HC11206NDLSOR
    
              <br />
              <br />
        
              <strong>R$ 249,00</strong><br/>

              10x <strong>de</strong> R$ 24,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div> 
        
            <div>
              <img src={bag22} alt="icone relatorio" />

              <p>
              LARABARCELOS - HC11208PTLSOR
              <br />
              <br />
        
              <strong>R$ 249,00</strong><br/>

              10x <strong>de</strong> R$ 24,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>
        
            <div>
              <img src={bag16} alt="icone relatorio" />

              <p>
              HCANAMONTENEGRO - HC11206PTCMLSOR
              <br />
              <br />
        
              <strong>R$ 249,00</strong><br/>

              10x <strong>de</strong> R$ 24,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>
        
            <div>
              <img src={bag15} alt="icone relatorio" />

              <p>
              HC - HC11206CMLSOR
              <br />
              <br />
        
              <strong>R$ 249,00</strong><br/>

              10x <strong>de</strong> R$ 24,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>      
        
        </div>
    
    </>
  )
}

