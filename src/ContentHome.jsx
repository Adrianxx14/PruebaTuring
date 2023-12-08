import Home from "./assets/components/Home";
import Nav from "./assets/components/Nav";
import "./assets/css/nav.css";
import "./assets/css/home.css";
import Footer from "./assets/components/Footer";


const ContentHome = () => {
    return(
        <>
         <Nav/>
         <Home/>
         <Footer/>
        </>
    )
}

export default ContentHome;