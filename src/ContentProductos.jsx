import Nav from "./assets/components/Nav";
import "./assets/css/nav.css";
import "./assets/css/Producto.css";
import { useState, useEffect } from "react"
import CardProductos from "./assets/components/CardProductos";
import Footer from "./assets/components/Footer";


const ContentProductos = () =>{
    //variable que almacena lps datos recibidos de la BD
    const [data, setData] = useState([]);

    const reloadData = async () => {
        try {
          const response = await fetch("http://localhost:8080/ApiSuper/index.php/Api/Productos");
          if (response.ok) {
            const newData = await response.json();
            setData(newData);
          } else {
            console.error("Error al obtener los datos.");
          }
        } catch (error) {
          console.error("Error de red:", error);
        }
      };

      useEffect(() => {
        reloadData();
        console.log(data);
      }, []);


    return(
        <div>
        <Nav/>
        <div className="row">
           {data.map(data => {
             return(
                <CardProductos key={data.id_Producto} Nombre={data.Nombre} Fotografia={data.Fotografia} Precio={data.Precio} />
            )
           })}
        </div>
        <Footer/>
        </div>
    )
}

export default ContentProductos;