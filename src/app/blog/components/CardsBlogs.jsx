import React from 'react'
import BgExample from '../../landing/img/BG.svg';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Button } from '@mui/material';

export const CardsBlogs = () => {
  return (
    <div className='card-blog'>
      <div className="card-blog-img">
        <img src={BgExample} alt="" />
      </div>
      <div className="card-blog-content">
        <div className="card-content-date">
          <DateRangeIcon fontSize='small' sx={{marginTop: '4px'}}/>
          <p style={{margin: '3px', fontSize: '13px'}}>2023/04/11</p>
        </div>
        <h5 className='text-center'>El gato con botas</h5>
        <p style={{textAlign: 'justify', margin: '15px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at vestibulum sapien, eu facilisis risus. Vivamus dignissim, mi vitae vestibulum bibendum, velit nunc aliquet nunc, sit amet auctor ipsum quam vitae ipsum. Nam eleifend velit erat, eu eff
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at vestibulum sapien, eu facilisis risus. Vivamus dignissim, mi vitae vestibulum bibendum, velit nunc aliquet nunc, sit amet auctor ipsum quam vitae ipsum. Nam eleifend velit erat, eu eff
        </p>
        <div className="card-blog-button" style={{display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>
          <Button
            variant='contained'
            sx={{
              marginRight: '15px',
              marginBottom: '10px'
            }}
          >
            <a href="" target='_blank'
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
