import React from 'react'
import "../css/CardUser.css";

const Usuarios = (props) => {
  return (
    <div className='bod'>
       <div className='slideC'>
       <div className='slide-container'>
            <div className='card-wrapper'>
                <div className='crd'>
                    <div className='image-cont'>
                        <span className='overlay'></span>

                        <div className='card-im'>
                            <img src="src/assets/img/use.png" className='card-i'/>
                        </div>
                    </div>
                    <div className='car-contt'>
                        <h2 className='name'>{props.Nombre}</h2>
                        <p className="descrip">{props.Puesto}</p>
                    </div>
                </div>
            </div>

        </div>
       </div>
       <script src='src/assets/JS/swiper-bundle.min.js'></script>
       <script src='src/assets/components/Usuarios.jsx src/assets/JS/script.js'></script>
    </div>
  )
}

export default Usuarios