import { useEffect, useReducer } from "react";
import {
  errorHandler,
  fetchHandler,
  loadHandler,
} from "../Action/actionCreator";
import reducer from "../Reducer/fetchReducer";
 
let initalState = {
  loding: false,
  prod: [],
  err: "",
};
let useGetAPI = (url,option) => {
    console.log('option is',option)
  let newOption=  option?{method:option.method,body:JSON.stringify(option.data)} :null
  let [prodData, dispatch] = useReducer(reducer, initalState);
   async function fetchData()
    {
        try {
            dispatch(loadHandler());
            let res = await fetch(url,newOption);
            let data = await res.json();
            dispatch(fetchHandler(data));
          } catch (err) {
            dispatch(errorHandler(err));
          }
    }
    useEffect(()=>{
        fetchData()
    },[])
 
  return prodData;
};
export default useGetAPI;
