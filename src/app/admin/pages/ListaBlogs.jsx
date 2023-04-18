import { useEffect } from 'react'
import { NavBar, TablaBlog, FiltrosBlog } from '../components'
import '../styles/ListaBlogStyle.css';

export const ListaBlogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <FiltrosBlog />
        <hr />
        <br />
        <TablaBlog />
      </div>
    </>
  )
}
