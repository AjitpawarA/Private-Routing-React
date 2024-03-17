import React from 'react'
import FirebaseHome from "./Email and Passward/FirebaseHome"
import AuthProvider from './Email and Passward/Context/AuthContext'
function App() {
  return (
    <div>
      <AuthProvider>
      
      <dir>
      <FirebaseHome/>
      </dir>
      </AuthProvider>
    
    </div>
  )
}

export default App