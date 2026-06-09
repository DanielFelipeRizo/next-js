"use server"

import { redirect } from "next/navigation"
import bcrypt from "bcryptjs"
import { eq } from "drizzle-orm"
import { db } from "../../db"
import { users } from "../../db/schema"

export interface UserActionState {
  errors?: {
    username?: string;
    name?: string;
    password?: string;
    general?: string;
  };
  values?: {
    username?: string;
    name?: string;
    password?: string;
    confirmPassword?: string;
  };
}

export const registerUser = async (
  prevState: UserActionState,
  formData: FormData
) => {
  const username = (formData.get("username") as string)?.trim()
  const name = (formData.get("name") as string)?.trim()
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string

  const errors: NonNullable<UserActionState["errors"]> = {}

  if (!username || username.length < 4) {
    errors.username = "Username must be at least 4 characters long"
  } else {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.username, username),
    })

    if (existingUser) {
      errors.username = "Username already exists"
    }
  }

  if (!password || password.length < 4) {
    errors.password = "Password must be at least 4 characters long"
  }

  if (password !== confirmPassword) {
    errors.password = "Passwords do not match"
  }

  if (Object.keys(errors).length > 0) {
    return { errors, values: { username, name, password, confirmPassword } }
  }

  const passwordHash = await bcrypt.hash(password, 10)

  await db.insert(users).values({ username, name, passwordHash })

  redirect("/login")
}
