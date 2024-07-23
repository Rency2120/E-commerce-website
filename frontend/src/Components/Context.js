import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({children})=>{
    const [user,setUser] = useState(false);
    const login = ()=>{setUser(true)};
    const logout = ()=>{setUser(false)};
    return (
        <>
          <AppContext.Provider value={{user, login, logout}}>{children}</AppContext.Provider>  
        </>
    )
}

export const useApp = ()=>{
    useContext(AppContext);
}

export {ContextProvider};