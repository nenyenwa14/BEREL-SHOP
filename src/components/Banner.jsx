import React from 'react'
import pix from '../assets/images/unsplash.png'

export const Banner = () => {
  return (
    <div className='BannerCont'>
        <div style={{position: 'relative'}} className='text'>
        <h2>season's selection</h2>
        <h4>Company that's grown from 270 to 480 employees in the last 12 months </h4>
        <button className='btn'>discover more</button>
        </div>

        <div className='logo'>
        <img src={pix} alt="" />
        </div>
    </div>
  )
}

