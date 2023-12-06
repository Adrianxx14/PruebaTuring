
const Login = () => {
    return (
        <>
         <main>
         <div className="container">
            <div className="form-content">
                <h1 id="titulo">Login</h1>
                <form action="">
                    <div className="input-group">
                        <div className="input-field">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder="Usuario" />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-user "></i>
                            <input type="text" placeholder="Contraseña" />
                        </div>
                        <div className="btn-field">
                            <button id="sign" type="button">Entrar</button>
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