import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Privatelogin from './Privatelogin'

function FirebaseHome() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login/>}></Route>
        {/* <Route path='/Profile' element={<Profile/>}></Route> */}
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/privatelogin' element={<Privatelogin/>}>
          <Route path='profile' element={<Profile/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default FirebaseHome