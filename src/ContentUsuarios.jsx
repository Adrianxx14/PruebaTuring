import React from 'react'
import Nav from "./assets/components/Nav";
import Usuarios from './assets/components/Usuarios';
import { useState, useEffect } from "react"
import Footer from './assets/components/Footer';

const ContentUsuarios = () => {

  //variable para editar los datos de usuarios
  const [dataToEdit, setDataToEdit] = useState(null);
  //variable que almacena lps datos recibidos de la BD
  const [data, setData] = useState([]);

    //Carga de datos de la base de datos a la variable useState "data"
  const reloadData = async () => {
    try {
      const response = await fetch("http://localhost:8080/ApiSuper/index.php/Api/Usuario");
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

  //Creacion de nueva usuarios haciendo uso de fetch asincrono para la peticion POST
  const createData = async (data) => {
    try {
      const url = "http://localhost:8080/ApiSuper/index.php/Api/Usuario";
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

 //Actualizacion de usuarios haciendo uso de fetch asincrono para la peticion PUT
  const updateData = async (data) => {
    try {
      const url = `http://localhost:8080/ApiSuper/index.php/Api/Usuario${data.id_Usuario}`;
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

  
  //Eliminación de usuarios haciendo uso de fetch asincrono para la peticion DELETE
  const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/ApiSuper/index.php/Api/Usuario${id}`, {
          method: "DELETE"
      });
      
      if (response.ok) {
        console.log(`usuario con el ${id} eliminado`);
        reloadData();
      } else {
          console.error("Error al eliminar el usuario.");
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
       <div>
           {data.map(data => {
             return(
                <Usuarios key={data.id_Producto} Nombre={data.Nombre} Puesto={data.Puesto} />
            )
           })}
      </div>
      <Footer/>
   </>
  )
}

export default ContentUsuarios