import React from 'react'

export const AsideBlog = (categ) => {
  console.log(categ);
  return (
    <div className='aside-blog-content'>
      <div className="aside-blog-category">
        <div className="blog-list-category">
          <h5>Categorias</h5>
          <hr />
          <ul>
            <li>Tutoriales</li>
            <li>Noticias</li>
            <li>Sunat</li>
          </ul>
        </div>
      </div>
    </div>
  )
};
