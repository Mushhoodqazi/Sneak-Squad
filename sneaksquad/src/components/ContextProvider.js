import { createContext, useContext, useEffect, useState } from "react";
import img from "../images/jordan1.jpg";
import { getAllData } from "./api";

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    const result = await getAllData();
    setData(result.data);
    setIsLoading(false)
  };
  return (
    <>
      {loading == true ? (
        <h1>Loading....</h1>
      ) : (
        <Context.Provider value={{ data, setData, cart, setCart }}>
          {children}
        </Context.Provider>
      )}
    </>
  );
};
export default ContextProvider;

export const useMyContext = () => {
  return useContext(Context);
};
