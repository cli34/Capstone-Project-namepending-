import React, { useState, useReducer } from "react"

export const initialState = {
  user: {},
  token: "",
  userType: "student",
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "login-success":
      let userType = "student"
      if (action.payload.email === "admin@a.com") userType = "admin"
      return {
        ...initialState,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
        token: "token", //action.payload.token,
        userType: userType, //action.payload.userType,
      }
    default:
      throw new Error("cannot handle action")
  }
}
