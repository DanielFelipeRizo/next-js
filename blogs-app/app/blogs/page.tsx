import Link from "next/link"
import { getBlogs } from "../services/blogs"

type Props = {
  searchParams: Promise<{ query?: string }>
}

const Blogs = async ({ searchParams }: Props) => {

  const { query } = await searchParams

  const blogs = await getBlogs()

  const filteredBlogs = query
    ? blogs.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()))
    : blogs

  const sortedBlogs = [...filteredBlogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      <h2>Blogs</h2>

      {/*Formulario básico que envía los datos a la URL (?query=...) 
        Por defecto un formulario sin método realiza una petición GET. 
        Esto significa que al pulsar "Buscar", el navegador añade automáticamente 
        ?query=valor a la URL, lo que Next.js detecta y recarga la página con 
        los nuevos resultados.
      */}
      <form>
        <input
          name="query"
          defaultValue={query} // Mantiene el texto buscado en el input
          placeholder="Buscar por título..."
        />
        <button type="submit">Buscar</button>
        
        {/* Botón opcional para limpiar la búsqueda */}
        {query && (
          <Link href="/blogs">
            Limpiar búsqueda
          </Link>
        )}
      </form>

      <ul>
        {sortedBlogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title} by {blog.author} likes: {blog.likes}</Link>
          </li>
        ))}
      </ul>

      {/* Mensaje si no hay resultados */}
      {sortedBlogs.length === 0 && <p>No se encontraron blogs que coincidan con "{query}".</p>}
    </div>
  )
}

export default Blogs
