import { useProd } from "../context/ProductContext";
import { useAuth } from "../context/Authentication";

function Product() {
  let  product = useProd();
   
  //let auth = useAuth();
  return(<><h1>devloping....</h1></>) 
  // <>
  //   <authContext.Consumer>
  //     {(auth) => {
  //       return (
  //         <productContext.Consumer>
  //           {(item) => {
  //             return (
  //               <>
  //                 {item?.map((data) => {
  //                   return (
  //                     <>
  //                       <div>
  //                         <h1>
  //                           user Name is:{" "}
  //                           {auth.success ? auth.user.name : data.prod}
  //                         </h1>
  //                       </div>
  //                     </>
  //                   );
  //                 })}
  //               </>
  //             );
  //           }}
  //         </productContext.Consumer>
  //       );
  //     }}
  //   </authContext.Consumer>
  // </>
}

export default Product;
