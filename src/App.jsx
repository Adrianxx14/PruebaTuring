import ContentLogin from './ContentLogin'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentHome from './ContentHome';
import Login from './assets/components/Login';
import ContentProductos from './ContentProductos';
import ContentAltaProductos from './ContentAltaProductos';
import ContentCategorias from './ContentCategorias';
import ContentUsuarios from './ContentUsuarios';
import Home from './assets/components/Home';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<Login/>}/>
      <Route exact path="/Home" element= {<ContentHome/>}/>
      <Route exact path="/Productos" element= {<ContentProductos/>}/>
      <Route exact path="/AltaProductos" element= {<ContentAltaProductos/>}/>
      <Route exact path="/AltaCategorias" element= {<ContentCategorias/>}/>
      <Route exact path="/Usuarios" element= {<ContentUsuarios/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App;
