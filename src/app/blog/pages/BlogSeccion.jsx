import { useState, useEffect } from 'react';
import { NavBar } from '../../landing/components';
import '../styles/BlogSectionStyle.css';

export const BlogSeccion = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    //window.scrollY te da los pixeles de desplazamiento vertical
    let currentScrollY = window.scrollY
    let landingHeader = document.querySelector('.blog-header');
    //getBoundingClientRect retorna información acerca del elemento seleccionado
    //en este caso solo queremos saber el alto de landingHeader
    let landingHeaderHeight = landingHeader.getBoundingClientRect().height;
    landingHeaderHeight = landingHeaderHeight - 100
    //preguntar que demonios sucede acá
    setIsScrolled(currentScrollY > landingHeaderHeight);
  },[]);

  return (
    <>
    <NavBar/>
    <header className='blog-header'>
      <h2 className='blog-header-title'>Blogs de DYF</h2>
      <p className='blog-header-text'>Mantente al tanto de nuestros blogs para guías y datos curiosos.</p>
    </header>
    </>
    
  )
}
