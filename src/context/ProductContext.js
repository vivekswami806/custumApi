import React, { createContext, useContext, useEffect, useReducer } from "react";
import useGetAPI from "../utilities/apiHelper";
export let productContext = createContext();

function ProductContext({ children }) {

  let url = "https://jsonplaceholder.typicode.com/posts";
  let data=  useGetAPI(url)
  console.log(data)
  return (
    <productContext.Provider value={{ ...data }}>
      {children}
    </productContext.Provider>
  );
}
//custom hook
let useProd = () => {
  return useContext(productContext);
};
export { useProd };

export default ProductContext;
