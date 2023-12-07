import {useState} from "react"

const initialForm = {
    Usuario: "",
    Contrasena: "",
  };

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
        <>
         <main>
            
         <div className="container">
            <div className="form-content">
                <h1 id="titulo">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-field">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" name="Usuario" id="userName" placeholder="Username or email"
                             onChange={handleChange} value={form.Usuario} />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-user "></i>
                            <input type="text" name="Contrasena" id="password" placeholder="Contraseña"
                             onChange={handleChange} value={form.Contrasena}/>
                        </div>
                        <div className="btn-field">
                            <button id="sign" type="button" onClick={handleSubmit}>Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
         </div>
         </main>
        </>
    )
}

export default Login;