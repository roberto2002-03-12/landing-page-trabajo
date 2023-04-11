import React from 'react'
import { NavBar, TablaBlog, FiltrosBlog } from '../components'
import '../styles/ListaBlogStyle.css';

export const ListaBlogs = () => {
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
