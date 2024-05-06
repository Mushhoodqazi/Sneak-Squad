import { useMyContext } from "./ContextProvider";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
const Cart = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const { cart, setCart } = useMyContext();
  console.log("🚀 ~ file: Cart.js:11 ~ Cart ~ cart:", cart)
  useEffect(() => {
    setCartData(cart);
  }, [cart, setCart]);
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const memoizedValue = useMemo(() => {
    return count;
  }, [count]);

  const handlePlaceOrder = async ()=>{
    try {
        const res =  await axios.post('/cart', cart)
        console.log("🚀 ~ file: Cart.js:37 ~ handlePlaceOrder ~ res:", res)
    } catch (error) {
        
    }
  }
  return (
    <div className="cartContainer">
      <Navbar />
      <button class="btn btn-primary" onClick={() => navigate("/")}>
        Go Back
      </button>
      {cartData &&
        cartData.map((it) => {
          return (
            <div className="cartItem">
              <div className="cartProductInformation">
                <h2 className="cartProductName">{it.productName}</h2>
                <p className="cartProductDecription">Price {it.productDescription}</p>
              </div>

              <button
                class="btn btn-primary"
                onClick={handleIncrement}
                style={{ marginLeft: "580px" }}
              >
                +
              </button>
              <span> {memoizedValue}</span>
              <button class="btn btn-primary" onClick={handleDecrement}>
                -
              </button>
              <button
                className="btnRemoveFromCart"
                class="btn btn-danger"
                onClick={() => handleRemoveFromCart(it.id)}
              >
                Remove from Cart
              </button>
              <button class="btn btn-primary" onClick={handlePlaceOrder}>place order</button>
            </div>
          );
        })}
       
      <Footer />
    </div>
  );
};
export default Cart;
