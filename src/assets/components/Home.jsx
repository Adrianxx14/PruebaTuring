import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    return(
        <div>
        <div className="carrusel">
            <div className="contentCarrusel">
                <div className="item" id="item-1">
                    <div className="itemTarjeta">
                        
                    </div>
                    <div className="itemCArrows">
                        <a href="#item1">
                         <i class="fa-solid fa-chevron-left"></i>
                        </a>
                        <a href="#item2">
                        <i class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="item" id="item-2">
                    <div className="itemTarjeta"></div>
                        <div className="itemCArrows">
                            <a href="#item3">
                            <i class="fa-solid fa-chevron-left"></i>
                            </a>
                            <a href="#item1">
                            <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                </div>
               <div className="item" id="item-3">
                    <div className="itemTarjeta"></div>
                        <div className="itemCArrows">
                            <a href="#item2">
                            <i class="fa-solid fa-chevron-left"></i>
                            </a>
                            <a href="#item3">
                            <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
               </div>
               <div className="contentCarrouselController">
                <a href="#item-1">•</a>
                <a href="#item-2">•</a>
                <a href="#item-3">•</a>
               </div>
        </div>
        
        {/* <div class="container">
        <h5 class="m-3">Colaboración de empresas</h5>
        <div class="cont-empresas">
            <a id="empresas" href="" class="mx-5"><img src="/src/assets/img/fondo.jpg" alt="" /></a>
            <a id="empresas" href="" class="mx-5"><img src="/src/assets/img/fondo.jpg" alt="" /></a>
            <a id="empresas" href="" class="mx-5"><img src="/src/assets/img/fondo.jpg" alt="" /></a>
            <a id="empresas" href="" class="mx-5"><img src="/src/assets/img/fondo.jpg" alt="" /></a>
        </div>
        </div> */}
    </div>
    )
}
export default Home;