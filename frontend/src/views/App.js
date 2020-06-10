import React from 'react';
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';
import Header from '../components/Header'
import icon from '../icons/home.png'


// images carousel
import img1 from '../img/dia-dos-namorados.webp'
import img2 from '../img/dia-dos-namorados2.webp'
import img3 from '../img/dia-dos-namorados3.webp'
import img4 from '../img/dia-dos-namorados4.webp'
// images bags
import bag1 from '../img/bolsa1.webp'
import bag2 from '../img/bolsa2.webp'
import bag3 from '../img/bolsa3.webp'
import bag4 from '../img/bolsa4.webp'
import bag5 from '../img/bolsa5.webp'
import bag6 from '../img/bolsa6.webp'
import bag7 from '../img/bolsa7.webp'
import bag8 from '../img/bolsa8.webp'


const props = {icon}

export default App => {
  return (
    <>
      <Header {...props}/>

      <div className = "anuncio">
            <p>
              <strong> FRETE GRÁTIS </strong>
              Válido para compras acima de R$799,00.
            </p>
            <Link to="/login" ><button> COMPRAR AGORA</button></Link>
          </div>
      <Carousel className = "divCarousel">
        <Carousel.Item className = "carousel">
          <div className = "img">
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            />
            </div>
        </Carousel.Item>
        <Carousel.Item className = "carousel">
          <div className = "img">
          <img
            className="d-block w-100"
            src={img2}
            alt="First slide"
            />
            </div>
        </Carousel.Item>
        <Carousel.Item className = "carousel">
          <div className = "img">
          <img
            className="d-block w-100"
            src={img3}
            alt="First slide"
            />
            </div>
        </Carousel.Item>
        <Carousel.Item className = "carousel">
          <div className = "img">
          <img
            className="d-block w-100"
            src={img4}
            alt="First slide"
            />
            </div>
        </Carousel.Item>
       
      </Carousel>
         

          <div className = "destaque">
              <p> APORVEITE AS NOSSAS NOVIDADES</p>
          </div>
          <br/>
 

          <div className = "destaque">
              <p> NOVAS COMPANHEIRAS! </p>
          </div>
          <hr />

        <div className='landingPage'>

            <div>
              <img src={bag1} alt="icone cifrão" />
              <p>
              HCDOROTHEAWERNECK -
              HC1184RSAMLSOR     

              <br />
              <br />
              
              <strong>R$ 399,00 </strong><br/>

              10x <strong>de</strong> R$ 39,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>

            <div>
              <img src={bag2} alt="icone relatorio" />

              <p>
              HCVIOLETA - HC11302OWLSOX
        
                <br/>
                <br/>
              <strong>R$ 349,00</strong>
                <br />
              10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>


            <div>
              <img src={bag3} alt="icone cifrão" />
              <p>
              HCBERALDAISELINGAPEREIRA -
              HC11303NDFRDOX
              
              <br /> 
              <br /> 
              <strong>R$ 429,00 </strong><br/>

              10x <strong>de</strong> R$ 42,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR AGORA</button></Link>
              </p>
            </div>

            <div>
              <img src={bag4} alt="icone relatorio" />

              <p>
              HCLUISAERUDINADESOUZA - HC1184LVLJLSOR
              <br />
              <br />
        
              <strong>R$ 399,00</strong><br/>

              10x <strong>de</strong> R$ 39,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>
          

            <div>
              <img src={bag5} alt="icone relatorio" />

              <p>
              HCANAMONTENEGRO - HC1184VTLJLSOR
                <br />
                <br />
              <strong>R$ 399,00</strong><br/>

              10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div> 
        
            <div>
              <img src={bag6} alt="icone relatorio" />

              <p>
              HCAIDADEMEDEIROS - HC11302PTLSOX
        
              <br />
              <br />
              <strong>R$ 349,00</strong><br/>

              10x <strong>de</strong> R$ 34,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>
        
            <div>
              <img src={bag7} alt="icone relatorio" />

              <p>
              HCANTONIETAPENTEADO - HC11303CMLSOX

              <br />
              <br />
        
              <strong>R$ 429,00</strong><br/>

              10x <strong>de</strong> R$ 42,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>
        
            <div>
              <img src={bag8} alt="icone relatorio" />

              <p>
              HCURSULA -
              HC1184MTAZLSOR
        
              <br/>
              <br/>
              <strong>R$ 339,00</strong><br/>

              10x <strong>de</strong> R$ 39,90 <strong>sem juros</strong>
              <Link to="/login" ><button> COMPRAR </button></Link>
              </p>
            </div>      
        
        </div>
      
      
    </>
  )
}

