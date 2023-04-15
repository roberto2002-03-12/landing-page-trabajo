import React from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Button } from '@mui/material';
import { transformDateFormat } from '../helpers/transformDateFormat';

export const CardsBlogs = ({props}) => {
  return (
    <div className='card-blog' style={{ marginBottom: '20px' }}>
      <div className="card-blog-img">
        <img src={props.urlImagen} alt="Imagen blog" />
      </div>
      <div className="card-blog-content">
        <div className="card-content-date">
          <DateRangeIcon fontSize='small' sx={{ marginTop: '4px' }}/>
          <p style={{margin: '3px', fontSize: '13px'}}>{ transformDateFormat(props.createdAt) }</p>
        </div>
        <h5 className='text-center'>{ props.titulo }</h5>
        <p style={{textAlign: 'justify', margin: '15px'}}>
          {props.descripcion}
        </p>
        <div className="card-blog-button" style={{display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>
          <Button
            variant='contained'
            sx={{
              marginRight: '15px',
              marginBottom: '10px'
            }}
          >
            <a href={props.urlBlog} target='_blank'
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Ver Blog
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
