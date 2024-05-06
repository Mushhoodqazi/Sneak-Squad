import {Link} from "react-router-dom";
import { SiNike,SiAdidas,SiPuma } from "react-icons/si/";
import {GiConverseShoe} from "react-icons/gi";
function Navtab() {
    return (
        <div style={{border:"1px shade lack", backgroundColor:"	#DCDCDC"}}>
            <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link to="Nike">
    <span class="nav-link dark, text-secondary"  ><SiNike/>Nike</span>
    </Link>
  </li>

  <li class="nav-item">
  <Link to="Adidas">
  <span class="nav-link dark, text-secondary"  style={{textDecoration:"none"}}><SiAdidas/>Adidas</span>
</Link>
 </li>

  <li class="nav-item">
  <Link to="Puma">
  <span class="nav-link dark, text-secondary" ><SiPuma/>Puma</span>
</Link>
 </li>

  <li class="nav-item">
  <Link to="Convers">
  <span class="nav-link dark, text-secondary" ><GiConverseShoe/>Convers</span>
</Link>   
  </li>

</ul>
        </div>
      );
}

export default Navtab;