import React, { createContext, useContext, useReducer } from "react"
import { initialState, AuthReducer } from "./reducer"

export const AuthContext = createContext()

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
