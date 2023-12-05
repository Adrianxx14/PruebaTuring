import ContentLogin from './ContentLogin'
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
         <Routes>
           <Route exact path="/" element= {<ContentLogin/>}/>
         </Routes>
    </BrowserRouter>
  )
}

export default App;
