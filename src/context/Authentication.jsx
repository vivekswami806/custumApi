import { createContext, useContext } from "react";
let auth = {
  message: "User login successfully",
  success: false,
  user: { name: "vinod" },
};
export let authContext = createContext();
function Authentication({ children }) {
  return (
    <authContext.Provider value={{ ...auth }}>{children}</authContext.Provider>
  );
}
//custom hook
let useAuth = () => {
  return useContext(authContext);
};
export { useAuth };

export default Authentication;
