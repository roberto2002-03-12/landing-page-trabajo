import { useState, useEffect } from 'react';
import { NavBar } from '../../landing/components';
import '../style/BlogSeccionStyle.css';
import { ContainerBlogs } from '../components/';

export const BlogSeccion = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollY = window.scrollY;
      let blogHeader = document.querySelector('.blog-header');
      let blogHeaderHeight = blogHeader.getBoundingClientRect().height;
      blogHeaderHeight = blogHeaderHeight - 300;

      setIsScrolled(currentScrollY > blogHeaderHeight);
    };
    //se agrega un eventListener para realizar las funciones
    window.addEventListener('scroll', handleScroll);
    //pero cuando el componente ya no se usa entonces se borra el eventListener con la parte de abajo
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar isScrolled={isScrolled}/>
      <header className='blog-header'>
        <h2 className='blog-header-title' id='encabezado-blog-title'>Blogs de DYF</h2>
        <p className='blog-header-text'>Mantente al tanto de nuestros blogs para guías y datos curiosos.</p>
      </header>
      <ContainerBlogs />
    </>
  )
}
