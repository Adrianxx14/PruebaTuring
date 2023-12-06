import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <>
        <header>
            <div className="logo">SuperMarket</div>
            <div className="di">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Productos">Productos</Link></li>
                    <li><Link to="/Productos">Contacto</Link></li>
                    <li><Link to="/">Salir</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Nav;