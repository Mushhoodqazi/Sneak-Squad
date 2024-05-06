// import { useEffect, useState } from "react";
// import { useMyContext } from "./ContextProvider";
// import { useNavigate } from "react-router-dom";

// function Nike() {
//   const navigate = useNavigate()
//   const { data } = useMyContext();
//   console.table(data)
//   const [productData, setProductData] = useState([])
//   useEffect(() => {
//     setProductData(data)
//   }, [])

//   const handleClick = (id) => {
//     navigate(`product/${id}`)
//   }
//     return (
//         <div>
//           <div style={{ marginTop: "30px" }}>
//       <h4>Recomended for you</h4>
//       {
//         productData.map((d) => (
//           <div style={{
//             display: "inline-block",
//             flexdirection: "row", padding: "13px"
//           }}>
//             <div class="card" style={{ width: "18rem" }}>
//               <img src={d.imageUrl} class="card-img-top" alt="..." style={{ aspectRatio: "10/9", objectFit: "cover", width: "100%", height:"100%" }} />
//               <div class="card-body">
//                 <h5 class="card-title">{d.name}</h5>
//                 <p class="card-text">{d.description} </p>
//                 <h5 class="card-text" style={{ TextDecoder: "bold" }}>{d.price}</h5>
//                 <button class="btn btn-primary" onClick={()=>handleClick(d.id) }>Place Order</button>
//               </div>
//             </div>


//           </div>
//         )
//         )
//       }
//     </div>
//   );
// }
//         </div>
//       );
// }

// export default Nike;