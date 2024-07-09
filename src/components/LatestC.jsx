import React from 'react'
import latestImg from '../assets/images/frame40.png'
import Img from '../assets/images/bllog.png'
import ImgB from '../assets/images/WebBlog.png'


export const LatestC = () => {
  return (
    <div className='LatestC'>
        <div className='LatestCard'>
           <div>
           <img src={latestImg} alt="" />
           </div>
            <div className='latestText'>
            <h6 style={{fontSize: '15px', textTransform: 'capitalize', color: 'gray'}}>women's jewellry</h6>
            <h3>latest <br /> collection</h3>
            <h6 style={{fontSize: '15px', textTransform: 'capitalize'}}>jewelley, pendants, rings and lot more <br /> available with 10% discount</h6>
            <button>view more</button>
            </div>
        </div>

        <div>
            <h3 style={{margin: '50px', textTransform: 'capitalize', textAlign: 'center'}}> recent blog</h3>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', paddingRight: '20px'}}>
        <div>
            <img style={{width: '300px', height: '250px'}} src={Img} alt="" />
            <div style={{paddingLeft: '25px', gap: '0'}}>
            <h6 style={{fontSize: '15px', textTransform: 'capitalize', color: 'gray'}}>june 29, 2024. by dami</h6>
            <h3 style={{textTransform: 'upperCase'}}>what out fashion <br /> consultant do?</h3>
            <h6>Serenity has taken possession of my entire <br /> soul, like these sweet mornings of spring which <br /> I enjoy. When, while the lovely valley...</h6>
            </div>
        </div>
        <div>
            <img style={{width: '300px', height: '250px'}} src={ImgB} alt="" />
            <div style={{paddingLeft: '25px', gap: '0'}}>
            <h6 style={{fontSize: '15px', textTransform: 'capitalize', color: 'gray'}}>june 30, 2024. by john</h6>
            <h3 style={{textTransform: 'upperCase'}}>How to Choose Your Dream <br /> Wedding Dress</h3>
            <h6>Serenity has taken possession of my entire <br /> soul, like these sweet mornings of spring which <br /> I enjoy. When, while the lovely valley...</h6>
            </div>
            </div>
        <div>
            <img style={{width: '300px', height: '250px'}} src={Img} alt="" />
            <div style={{paddingLeft: '25px', gap: '0'}}>
            <h6 style={{fontSize: '15px', textTransform: 'capitalize', color: 'gray'}}>july 2, 2024. by uche</h6>
            <h3 style={{textTransform: 'upperCase'}}>Bright and Colorful Bridal <br /> Bouquets</h3>
            <h6>Serenity has taken possession of my entire <br /> soul, like these sweet mornings of spring which <br /> I enjoy. When, while the lovely valley...</h6>
            </div>
            </div>
        </div>

    </div>
  )
}
