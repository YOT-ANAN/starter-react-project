import React, { useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { getStorage } from "../utils/functions/localStorage"
export default function PrivateRoute({ children, ...rest }) {
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <Route
      {...rest}
      render={({ location }) =>
        getStorage("token-starter") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
