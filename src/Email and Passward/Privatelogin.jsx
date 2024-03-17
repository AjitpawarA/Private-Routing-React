import React from 'react'
import { Outlet } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react';
import NotLoggedin from"./NotLoggedin";

const Privatelogin=()=> {
    
  const authcontext= useContext(AuthContext)
    const islogin=authcontext.vstate;

    if(islogin){
        return <Outlet/>
    }
    else{
        return (
            <NotLoggedin/>
        )
    }

}

export default Privatelogin