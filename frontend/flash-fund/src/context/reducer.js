import React, { useState, useReducer } from "react"

export const initialState = {
  user: {},
  token: "",
  userType: "admin",
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "login-success":
      return {
        ...initialState,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
        token: "token", //action.payload.token,
        userType: "student", //action.payload.userType,
      }
    default:
      throw new Error("cannot handle action")
  }
}
