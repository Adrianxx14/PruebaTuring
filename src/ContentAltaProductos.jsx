import React from 'react'
import Nav from "./assets/components/Nav";
import { useState, useEffect } from "react"
import AltaProductos from './assets/components/AltaProductos';
import "./assets/css/style.css";
import Footer from './assets/components/Footer';
import "./assets/css/footer.css";

const ContentAltaProductos = () => {
//variable para editar los datos de los productos
const [dataToEdit, setDataToEdit] = useState(null);
//variable que almacena lps datos recibidos de la BD
const [data, setData] = useState([]);


//Carga de datos de la base de datos a la variable useState "data"
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

//Creacion de nuevo producto haciendo uso de fetch asincrono para la peticion POST
  const createData = async (data) => {
    try {
      const url = "http://localhost:8080/ApiSuper/index.php/Api/Productos";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Ocurrio un error");
      }
      reloadData();
      console.log(responseData);

    } catch (err) {
      console.log(err.message);
    } 
  }


//Actualizacion de productos haciendo uso de fetch asincrono para la peticion PUT
  const updateData = async (data) => {
    try {
      const url = `http://localhost:8080/ApiSuper/index.php/Api/Productos/${data.id_Producto}`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Ocurrio un error");
      }
      reloadData();
      console.log(responseData);
    } catch (err) {
      console.log(err.message);
    } 
  }

 //Eliminación de un producto haciendo uso de fetch asincrono para la peticion DELETE
  const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/ApiSuper/index.php/Api/Productos/${id}`, {
          method: "DELETE"
      });
      
      if (response.ok) {
        console.log(`Producto con el ${id} eliminado`);
        reloadData();
      } else {
          console.error("Error al eliminar el producto.");
      }
   } catch (error) {
     console.error("Error de red:", error);
   }
  }

  useEffect(() => {
    reloadData();
  }, []);

  return (
    <>
    <Nav/>
    <AltaProductos 
      data={data}
      createData={createData}
      updateData={updateData}
      dataToEdit={dataToEdit}
      deleteData={deleteData} 
      setDataToEdit={setDataToEdit}
   />
   </>
  )
}

export default ContentAltaProductos