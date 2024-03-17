import React from 'react'
import { createContext, useContext } from 'react'
import { useState } from 'react';


export const AuthContext = createContext();

function AuthProvider(props) {

  const [vstate, setvstate]=useState(false);

  const [usename, setusername]= useState("");
  return (
    <AuthContext.Provider value={{vstate, setvstate,usename,setusername}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider