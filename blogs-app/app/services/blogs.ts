
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
    },
    {
      id: 4,
      title: "Why Next.js is Great",
      author: "Jane Doe",
      url: "https://example.com/next-is-great",
      likes: 150
    },
    {
      id: 5,
      title: "React Server Components Explained",
      author: "John Smith",
      url: "https://example.com/react-rsc",
      likes: 95
    },
    {
      id: 6,
      title: "Getting Started with TypeScript",
      author: "Alice Johnson",
      url: "https://example.com/typescript-intro",
      likes: 120
    },
    {
      id: 7,
      title: "Advanced CSS Techniques",
      author: "Bob Brown",
      url: "https://example.com/css-advanced",
      likes: 85
    },
    {
      id: 8,
      title: "Mastering JavaScript Promises",
      author: "Charlie Davis",
      url: "https://example.com/js-promises",
      likes: 110
    },
    {
      id: 9,
      title: "State Management in React",
      author: "Diana Evans",
      url: "https://example.com/react-state",
      likes: 135
    },
    {
      id: 10,
      title: "Introduction to GraphQL",
      author: "Ethan Foster",
      url: "https://example.com/graphql-intro",
      likes: 78
    },
    {
      id: 11,
      title: "Web Security Best Practices",
      author: "Fiona Green",
      url: "https://example.com/web-security",
      likes: 92
    },
    {
      id: 12,
      title: "Building PWAs",
      author: "George Harris",
      url: "https://example.com/building-pwas",
      likes: 65
    },
    {
      id: 13,
      title: "Testing with Jest",
      author: "Hannah Ivan",
      url: "https://example.com/testing-jest",
      likes: 55
    },
    {
      id: 14,
      title: "Tailwind CSS Framework",
      author: "Isaac Jones",
      url: "https://example.com/tailwind-css",
      likes: 70
    },
    {
      id: 15,
      title: "Accessibility in Web Design",
      author: "Julia King",
      url: "https://example.com/web-accessibility",
      likes: 48
    },
    {
      id: 16,
      title: "Introduction to Rust",
      author: "Kevin Lee",
      url: "https://example.com/rust-intro",
      likes: 60
    },
    {
      id: 17,
      title: "Docker for Developers",
      author: "Laura Martinez",
      url: "https://example.com/docker-devs",
      likes: 72
    },
    {
      id: 18,
      title: "CI/CD Pipelines",
      author: "Mike Nelson",
      url: "https://example.com/cicd-pipelines",
      likes: 58
    },
    {
      id: 19,
      title: "Microservices Architecture",
      author: "Nancy Olson",
      url: "https://example.com/microservices",
      likes: 85
    },
    {
      id: 20,
      title: "RESTful API Design",
      author: "Oscar Perez",
      url: "https://example.com/rest-api-design",
      likes: 67
    }
]

let nextId = 21

export const getBlogs = () => {
    return blogs
}

export const addBlog = (title: string, author: string, url: string) => {
    blogs.push({ id: nextId++, title, author, url, likes: 0})
}

export const getBlogById = (id: number) => {
    return blogs.find((blog) => blog.id === id)
}

export const updateLikes = (id: number) => {
    const blog = blogs.find((blog) => blog.id === id)
    if (blog) {
        blog.likes = blog.likes + 1
    }
}

