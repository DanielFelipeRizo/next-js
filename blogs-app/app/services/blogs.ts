
const blogs = [
    {id: 1,
    title: "blog1",
    author: "author1",
    url: "http://localhost:3000/blogs/1",
    likes: 10
    },
    {id: 2,
    title: "blog2",
    author: "author2",
    url: "http://localhost:3000/blogs/2",
    likes: 20
    },
    {id: 3,
    title: "blog3",
    author: "author3",
    url: "http://localhost:3000/blogs/3",
    likes: 30
    }
]

let nextId = 4

export const getBlogs = () => {
    return blogs
}

export const addBlog = (title: string, author: string, url: string) => {
    blogs.push({ id: nextId++, title, author, url, likes: 0})
}
