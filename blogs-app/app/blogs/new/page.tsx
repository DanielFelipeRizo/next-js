"use client"

import { useActionState } from "react"
import { createBlog } from "@/app/actions/blogs"
import type { BlogActionState } from "@/app/actions/blogs"

const NewBlog = () => {

    const [state, formAction] = useActionState<BlogActionState, FormData>(createBlog, {})

    console.log(state)

    return (
        <div>
            <h2>Create a new blog</h2>
            <form action={formAction}>
                <div>
                    <label>
                        Title
                        <input 
                            type="text" 
                            name="title" 
                            required 
                            defaultValue={state?.values?.title}
                        />
                    </label>
                    {state?.errors?.title && (
                        <p style={{ color: "red", fontSize: "0.875rem", margin: "4px 0 0 0" }}>
                            {state.errors.title}
                        </p>
                    )}
                </div>
                <div>
                    <label>
                        Author
                        <input 
                            type="text" 
                            name="author" 
                            required 
                            defaultValue={state?.values?.author}
                        />
                    </label>
                    {state?.errors?.author && (
                        <p style={{ color: "red", fontSize: "0.875rem", margin: "4px 0 0 0" }}>
                            {state.errors.author}
                        </p>
                    )}
                </div>
                <div>
                    <label>
                        URL
                        <input 
                            type="text" 
                            name="url" 
                            required 
                            defaultValue={state?.values?.url}
                        />
                    </label>
                    {state?.errors?.url && (
                        <p style={{ color: "red", fontSize: "0.875rem", margin: "4px 0 0 0" }}>
                            {state.errors.url}
                        </p>
                    )}
                </div>
                <button type="submit" style={{ marginTop: "12px" }}>Create</button>
                {state?.errors?.general && (
                    <p style={{ color: "red", marginTop: "8px" }}>{state.errors.general}</p>
                )}
            </form>
        </div>
    )
}

export default NewBlog