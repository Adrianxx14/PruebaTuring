import React from 'react'
import "../css/footer.css";

const Footer = () => {
  return (
    <div>
    <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <h1 style={{color: "white"}}>SuperMarket</h1>
                </figure>
            </div>
            <div className="box">
                <h2>NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a href="#"><img src="src/assets/img/facebook (1).png"/></a>
                    <a href="#"><img src="src/assets/img/gorjeo (1).png"/></a>
                    <a href="#"><img src="src/assets/img/youtube (1).png"/></a>
                    <a href="#"><img src="src/assets/img/instagram.png"/></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>Adrian Moreno</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    </div>
  )
}

export default Footer