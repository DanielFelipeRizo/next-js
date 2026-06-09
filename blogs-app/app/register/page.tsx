"use client"

import { useActionState } from "react"
import { registerUser } from "../actions/users"
import type { UserActionState } from "../actions/users"

export default function RegisterPage() {
  const [state, formAction] = useActionState<UserActionState, FormData>(registerUser, {})

  return (
    <div>
      <h2>Register</h2>
      <form action={formAction}>
        <div>
          <label>
            Username
            <input 
              type="text" 
              name="username" 
              required 
              defaultValue={state?.values?.username}
            />
          </label>
          {state?.errors?.username && (
            <p style={{ color: "red", fontSize: "0.875rem", margin: "4px 0 0 0" }}>
              {state.errors.username}
            </p>
          )}
        </div>
        <div>
          <label>
            Name
            <input 
              type="text" 
              name="name" 
              required 
              defaultValue={state?.values?.name}
            />
          </label>
          {state?.errors?.name && (
            <p style={{ color: "red", fontSize: "0.875rem", margin: "4px 0 0 0" }}>
              {state.errors.name}
            </p>
          )}
        </div>
        <div>
          <label>
            Password
            <input 
              type="password" 
              name="password" 
              required 
              defaultValue={state?.values?.password}
            />
          </label>
          {state?.errors?.password && (
            <p style={{ color: "red", fontSize: "0.875rem", margin: "4px 0 0 0" }}>
              {state.errors.password}
            </p>
          )}
        </div>
        <div>
          <label>
            Confirm Password
            <input 
              type="password" 
              name="confirmPassword" 
              required 
              defaultValue={state?.values?.password}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "12px" }}>Register</button>
        {state?.errors?.general && (
          <p style={{ color: "red", marginTop: "8px" }}>{state.errors.general}</p>
        )}
      </form>
    </div>
  )
}