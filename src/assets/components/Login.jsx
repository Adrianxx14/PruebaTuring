
const Login = () => {
    return (
        <>
         <div className="container">
            <div className="form-content">
                <h1 id="titulo">Login</h1>
                <form action="">
                    <div className="input-group">
                        <div className="input-field">
                            <i className="fa-solid fa-user "></i>
                            <input type="text" placeholder="Usuario" />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-user "></i>
                            <input type="text" placeholder="Contraseña" />
                        </div>
                        <div className="btn-field">
                            <button id="sign" type="button">Iniciar</button>
                        </div>
                    </div>
                </form>
            </div>
         </div>
        </>
    )
}

export default Login;