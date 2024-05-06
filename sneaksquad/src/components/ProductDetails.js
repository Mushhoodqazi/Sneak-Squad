import { useEffect, useState } from "react";
import { useMyContext } from "./ContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "../images/jordan1.jpg";
import "./ProductDetails.css";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { data, cart, setCart } = useMyContext();
  const [allProduct, setAllProduct] = useState([]);
  const [product, setProduct] = useState({});
  // console.log("🚀 ~ file: ProductDetails.js:16 ~ ProductDetails ~ product:", product)

  // const handleDecrement = () => {
  //   setQuantity(quantity - 1);
  // };

  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  useEffect(() => {
    setAllProduct(data);
    const filterProduct = allProduct.filter((item) => item._id == id);
    console.log(filterProduct);
    setProduct(filterProduct[0]);
  }, [allProduct, data]);

  const handleAddToCart = () => {
    setCart(prevCart => [...prevCart, product]);
    navigate('/cart');
  };

  console.log("cart", cart);

  return (
    <div>
      <Navbar />
      {product && (
        <div className="productContainer">
          <div className="productInformation">
            <h2 className="productName">{product.productDescription}</h2>
            <p className="productDescription">{product.productName}</p>
          </div>
          <div className="productDetailsContaier">
            <div className="productImageContainer">
              <img className="productImage" src={product.productImageUrl} alt="Product" style={{objectFit:"contain"}} />
            </div>
            <div className="productDetails">
              <div className="lastSale">
                <h3 className="lastSaleText">639 sold in the last 2 hours</h3>
              </div>
              <div className="productInputContainer">
                <div className="productSizeContainer">
                  <p className="sizeText">Select Size</p>
                  <select className="productSize">
                    <option>16</option>
                    <option>18</option>
                    <option>20</option>
                    <option>22</option>
                  </select>
                </div>
                <button className="btnPlaceBid">Place Bid</button>
                <button className="btnPlaceBid" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="btnSellMore">Sell for --or Ask for More</button>
              </div>
              <div className="saleInformation">
                <div className="lastSaleInformation">
                  <p className="lastSaleText">Last Sale</p>
                  <h2 className="productPrice">{product.productPrice}</h2>
                </div>
                <div className="btnContainer">
                  <button className="btnViewAsk">View Asks</button>
                  <button className="btnViewBids">View Bids</button>
                  <button className="btnViewSales">View Sales</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;
