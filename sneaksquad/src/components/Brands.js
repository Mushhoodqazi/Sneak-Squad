import { useState } from "react";

function Brands() {
    const [brand, setbrand]=useState([
        {
        img:"Jordan5.jpg",
        txt:"Nike Air Jordans 1"
    },
    {
        img:"convers1.png",
        txt:"Convers"
    },
    {
        img:"yeezy1.jpg",
        txt:"Adidas Yeezy"
    },
    {
        img:"reebok1.jpg",
        txt:"Reebok Basics"
    },

])
    return (
        <div style={{marginTop:"30px"}}>
            <h4>Popular Brands</h4>

            {
                brand.map((a)=>(
<div style={{ display:"inline-block",
          flexdirection: "row", padding:"13px"}}>
<div class="card" style={{width:"18rem"}}>
  <img src={a.img} class="card-img-top" alt="..." style={{aspectRatio:"10/9",objectFit:"cover", width:"100%"}}/>
  <div class="card-body">
    <p class="card-text"><h5>{a.txt}</h5></p>
  </div>
</div>




</div>
)
)
}

<div style={{paddingLeft:"10px"}}>
    <img src="card1.webp" alt=".."/>
    <img src="card2.webp" alt=".."/>
</div>
        </div>
      );
}

export default Brands;