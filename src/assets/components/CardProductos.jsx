import React from 'react'

const CardProductos = (props) => {
  return (
   <div className='contCard'>
    <div className='containerCard'>
    <div className='card'>
        <figure>
         <img src="src/assets/img/Producto.jpg"/>
        </figure>
       <div className='contentCard'>
         <h1>{props.Nombre}</h1>
         <p>{props.Puesto}</p>
         <a href="">Visualizar</a>
       </div>
    </div>
    </div>
   </div>
  )
}

export default CardProductos