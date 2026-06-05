"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addBlog, updateLikes } from "../services/blogs"
import { auth } from "@auth"

export interface BlogActionState {
    error: string;
    value?: string;
}

export const createBlog = async (
    prevState: BlogActionState,
    formData: FormData
): Promise<BlogActionState> => {

    const session = await auth()
    if (!session) {
        redirect("/login")
    }

    const title = formData.get("title") as string

    if (!title || title.length < 5) {
        return { error: "Title must be at least 5 characters long", value: title }
    }

    const author = formData.get("author") as string
    if (!author || author.length < 5) {
        return { error: "Author must be at least 5 characters long", value: title }
    }

    const url = formData.get("url") as string
    if (!url || url.length < 5) {
        return { error: "URL must be at least 5 characters long", value: title }
    }

    await addBlog(title, author, url)

    revalidatePath("/blogs")
    redirect("/blogs")
}

export const likeBlog = async (formData: FormData) => {
    const id = Number(formData.get("id"))
    await updateLikes(id)
    revalidatePath(`/blogs/${id}`)
}
