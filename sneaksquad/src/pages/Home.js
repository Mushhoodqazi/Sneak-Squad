import About from "../components/About";
import Brands from "../components/Brands";
import Cards from "../components/Cards";
import Carosel from "../components/Carosel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navtab from "../components/Navtab";
import Checkout from "../components/checkout";

function Home() {
    return ( 
        <div>
            
            <Navbar/>
            <Navtab/>
            <Carosel/>
            {/* <About/> */}
            <Cards/>
            <Brands/>
            <Cards/>
            <Footer/>
            {/* <Checkout/> */}
        </div>
     );
}

export default Home;