import {useState} from "react"
import { Link } from "react-router-dom";

const initialForm = {
    Usuario: "",
    Contrasena: "",
};

/* eslint-disable no-unused-vars */
const Login = ({getUser}) => {

    const [form, setForm] = useState(initialForm);
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!form.Usuario || !form.Contrasena) {
          alert("Datos incompletos");
          return;
        }

        getUser(form);
    };

    return (
         <main>
         <div className="container">
            <div className="form-content">
                <h1 id="titulo">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-field">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" name="Usuario" id="usuario" placeholder="Username"
                             onChange={handleChange} value={form.Usuario} />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-user "></i>
                            <input type="password" name="Contrasena" id="contrasena" placeholder="Contraseña"
                             onChange={handleChange} value={form.Contrasena}/>
                        </div>
                        <div className="btn-field">
                        <Link to="/Home"><input type="submit" className="btn-Producto type1" value="Ingresar" id="entrar"/></Link>
                           {/* <input type="submit" className="btn-Producto type1" value="Ingresar" id="entrar" onClick={handleSubmit}/>  */}
                        </div>
                    </div>
                </form>
            </div>
         </div>
         </main>
    )
}

export default Login;