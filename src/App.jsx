import ContentLogin from './ContentLogin'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentHome from './ContentHome';
import Login from './assets/components/Login';
import ContentProductos from './ContentProductos';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<ContentHome/>}/>
      <Route exact path="/Home" element= {<ContentHome/>}/>
      <Route exact path="/Productos" element= {<ContentProductos/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App;
