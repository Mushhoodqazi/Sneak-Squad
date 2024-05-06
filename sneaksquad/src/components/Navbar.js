import {Link, useNavigate} from "react-router-dom";
import { useMyContext } from "./ContextProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate()
  const {cart}= useMyContext()
    return (
        <div style={{overflow:"hidden"}} >
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sneak-Squad</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link to="/">
          <a class="nav-link active" aria-current="page" >Home</a>
          </Link>
        </li>
        <li class="nav-item">
            <Link to="Aboutus">
          <span class="nav-link" >About us</span>
          </Link>
        </li>
        <li class="nav-item">
            <Link to="Help">
          <a class="nav-link" >Help</a>
          </Link>
        </li>
        {/* <li class="nav-item">
            <Link to="Blog">
          <a class="nav-link" href="#">Blog</a>
          </Link>
        </li> */}
        <li class="nav-item">
            <Link to="Admin">
          <a class="nav-link" href="#">Admin</a>
          </Link>
        </li>

        <Link to="Signup">
          <span class="nav-link" >Sign Up</span>
          </Link>
          <Link to="Login">
          <span class="nav-link" >Login</span>
          </Link>
        
      
      </ul>
      <a class="nav-link"  onClick={()=>navigate('/cart')} style={{paddingRight:"20px"}}><AiOutlineShoppingCart/>{cart.length} </a>
      <br></br>
      
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
      );
}

export default Navbar;