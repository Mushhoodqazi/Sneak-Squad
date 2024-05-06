import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css"
function Help() {
  const [hlp,abthelp]=useState([
    {
      hh:"Buying on Sneak Squad",
      pp:"Buy now, how to pay and delevery"

  },
  {
    hh:"Selling on Sneak Squad",
    pp:"Ask, sell now, shipping, and verification"

},
{
  hh:"my Account",
  pp:"Notifications, and settings,ask and bid management"

},
{
  hh:"Verification",
  pp:"Learn how our products are legit"

},
{
  hh:"Product Guideline",
  pp:"Whats for sale? Quality guideline and shipping specs"

},
{
  hh:"Payments",
  pp:"Fee, currencies, and payment methods"

},
{
  hh:"Shipping",
  pp:"Instructions, options and shipping details"

},
{
  hh:"policy",
  pp:"Legal notice, region specific information"

},
{
  hh:"NFTs",
  pp:"All about selling and trading NFts"

}
])
    return (
        <div>
          <Navbar/>

          {
            hlp.map((q)=>(
              <div class="card border-dark mb-3" style={{maxwidth: "4rem", padding: "2rem",
              overflow: "hidden",
              display: "grid",
              gridtemplatecolumns:" repeat(3, 1fr)",
              gridtemplaterows: "auto",
              gridcolumngap: "8px",
              gridrowgap: "8px"}}>
              <div class="card-header">{q.hh}</div>
              <div class="card-body text-dark">
               
                <p class="card-text">{q.pp}</p>
              </div>
            </div>
            )
            )
          }
          <Footer/>
         
        </div>
      );
}

export default Help;