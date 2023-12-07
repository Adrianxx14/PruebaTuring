import { useState } from "react"
import Login from "./assets/components/Login";
import "./assets/css/style.css";


const ContentLogin = () => {

    const [dataUser, setDataUser] = useState(null);

    const getUser = async (user) => {
        try {
          const url = "http://localhost:8080/ApiSuper/index.php/Api/Usuario";
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          };
    
          const response = await fetch(url, options);
          const responseData = await response.json();
    
          if (!response.ok) {
            throw new Error(responseData.message || "Ocurrio un error");
          }
    
          if (responseData != null || responseData != 1) {
            setDataUser(responseData.data);
            console.log(responseData.data.Nombre);
    
            localStorage.setItem("sesion", JSON.stringify(responseData.data));
            console.log(JSON.parse(localStorage.getItem("sesion")));
    
            window.location.href = "/Productos";
          }
    
        } catch (err) {
          console.log(err.message);
          alert('Usuario no valido');
        } 
      }

    return(
        <>
        <Login getUser={getUser}/>
        </>
    )
}


export default ContentLogin;
