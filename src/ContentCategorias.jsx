import React from 'react'
import Nav from "./assets/components/Nav";
import { useState, useEffect } from "react"
import AltaCategorias from './assets/components/AltaCategorias';
import "./assets/css/style.css";

const ContentCategorias = () => {

    //variable para editar los datos de los productos 
    const [dataToEdit, setDataToEdit] = useState(null); 
    //variable que almacena lps datos recibidos de la BD
    const [data, setData] = useState([]);

    
  //Carga de datos de la base de datos a la variable useState "data"
  const reloadData = async () => {
    try {
      const response = await fetch("http://localhost:8080/ApiSuper/index.php/Api/Categorias");
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

  //Creacion de nueva Categoria haciendo uso de fetch asincrono para la peticion POST
  const createData = async (data) => {
    try {
      const url = "http://localhost:8080/ApiSuper/index.php/Api/Categorias";
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

  
//Actualizacion de Categoria haciendo uso de fetch asincrono para la peticion PUT
const updateData = async (data) => {
    try {
      const url = `http://localhost:8080/ApiSuper/index.php/Api/Categorias/${data.id_categoria}`;
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

  
 //Eliminación de una Categoria haciendo uso de fetch asincrono para la peticion DELETE
 const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/ApiSuper/index.php/Api/Categorias/${id}`, {
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
    <AltaCategorias
    data={data}
    createData={createData}
    updateData={updateData}
    dataToEdit={dataToEdit}
    deleteData={deleteData} 
    setDataToEdit={setDataToEdit}/>
    </>
  )
}

export default ContentCategorias