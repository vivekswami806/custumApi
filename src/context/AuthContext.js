import { createContext } from "react"
let auth={message:"User login successfully",success:false,user:{name:"vinod"}}
export let  authContext=createContext()
function AuthContext() {
  return  <authContext.Provider value={{...auth}}>

          </authContext.Provider>
}

export default AuthContext