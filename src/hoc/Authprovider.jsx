import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [user, setuser] = useState(null)

  const singin = (newUser, cb) => {
    setuser(newUser)
    cb()
  }
  const singout = (cb) => {
    setuser(null)
    cb()
  }

  const value = {user, singin, singout}

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}