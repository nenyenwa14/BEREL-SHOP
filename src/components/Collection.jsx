import React from 'react'
import mod from '../assets/images/Model.png'
import Card from 'antd/es/card/Card'
import { FaStar } from 'react-icons/fa';
import pic from '../assets/images/BLOG.png'
import picc from '../assets/images/jewellry.png'
import piccc from '../assets/images/girl.png'
import mod1 from '../assets/images/First.png'
import mod2 from '../assets/images/second.png'
import mod3 from '../assets/images/third.png'
import del from '../assets/images/model1.png'
import del1 from '../assets/images/model2.png'
import del2 from '../assets/images/model3.png'
import del3 from '../assets/images/model4.png'

export const Collection = () => {
  return (
    <div className='Collection'>
        <div className='flex'>
            <div className='mainImg'>
            <div className='img_M'>
            <h6>spring collection</h6>
            <h3>new <br /> arrivals</h3>
            <button>view more</button>
            </div>
            <img style={{width: '399px', height: '600px', position:'relative', top: '-400px', left: '100px'}} src={piccc} alt="" />
            </div>
        <div className='grid'>
           <div className='Img_2'> 
            <img style={{width: '300px'}} src={pic} alt="" />
           </div>
           <div className='Img_1'>
            <div className='img_t'>
            <h6>the assoseries collection</h6>
            <h3>women's <br /> assoseries</h3>
            <button style={{background: '#DCEEFE'}}>view more</button>
            </div>
           </div>
           <div className='Img_1'>
           <div  className='img_t'>
           <h6>best offer</h6>
            <h3>men <br /> watches</h3>
            <button>view more</button>
           </div>
           </div>
           <div className='Img_2'> <img style={{width: '280px'}} src={picc} alt="" /></div>
        </div>
        </div>

        <div className='cardCont'>
          <h4>the best collection</h4>
          <h6>of fashion week - summer 2024</h6>
        </div>

        <div className='cards'>
        <div>
        <Card
        hoverable
        cover={<img src={mod} alt="" />}
        style={{
            width: 250,
            height: 580,
            border: 'none',
            background: 'white',
        }}
        >
            <div  className='mainCards'>
            <h3>white cap gown</h3>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <FaStar style={{ color: ' #F1F1F1', }}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <p>n65.000 <s>n70.000 </s></p>
            <button>add to cart</button>
            </div>
        </Card>
        </div>
        <div>
        <Card
        hoverable
        cover={<img src={mod1} alt="" />}
        style={{
            width: 250,
            height: 580,
            border: 'none',
            background: 'white',
        }}
        >
            <div className='mainCards'>
            <h3>white cap gown</h3>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <FaStar style={{ color: ' #F1F1F1', }}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <p>n60.000</p>
            <button>add to cart</button>
            </div>
        </Card>
        </div>
        <div>
        <Card
        hoverable
        cover={<img src={mod2} alt="" />}
        style={{
            width: 250,
            height: 580,
            border: 'none',
            background: 'white',
        }}
        >
            <div className='mainCards'>
            <h3>white cap gown</h3>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <FaStar style={{ color: ' #F1F1F1', }}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <p>n65.000</p>
            <button>add to cart</button>
            </div>
        </Card>
        </div>
        <div>
        <Card
        hoverable
        cover={<img src={mod3} alt="" />}
        style={{
            width: 250,
            height: 580,
            border: 'none',
            background: 'white',
        }}
        >
            <div className='mainCards'>
            <h3>white cap gown</h3>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <FaStar style={{ color: ' #F1F1F1', }}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <p>n40.000</p>
            <button>add to cart</button>
            </div>
        </Card>
        </div>
        </div>

        <div className='cards'>
        <div>
        <Card
        hoverable
        cover={<img src={del} alt="" />}
        style={{
            width: 250,
            height: 580,
            border: 'none',
            background: 'white',
        }}
        >
            <div className='mainCards'>
            <h3>white cap gown</h3>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <FaStar style={{ color: ' #F1F1F1', }}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <p>n50.000</p>
            <button>add to cart</button>
            
          </div>
        </Card>
        </div>
        <div>
        <Card
        hoverable
        cover={<img src={del1} alt="" />}
        style={{
            width: 250,
            height: 580,
            border: 'none',
            background: 'white',
        }}
        >
            <div className='mainCards'>
            <h3>white cap gown</h3>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <FaStar style={{ color: ' #F1F1F1', }}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <p>n70.000</p>
            <button>add to cart</button>
            </div>
        </Card>
        </div>
        <div>
        <Card
        hoverable
        cover={<img src={del2} alt="" />}
        style={{
            width: 250,
            height: 580,
            border: 'none',
            background: 'white',
        }}
        >
            <div className='mainCards'>
            <h3>white cap gown</h3>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <FaStar style={{ color: ' #F1F1F1', }}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <p>n30.000</p>
            <button>add to cart</button>
            </div>
        </Card>
        </div>
        <div>
        <Card
        hoverable
        cover={<img src={del3} alt="" />}
        style={{
            width: 250,
            height: 580,
            border: 'none',
            background: 'white',
        }}
        >
            <div className='mainCards'>
            <h3>white cap gown</h3>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: 'gold'}}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <FaStar style={{ color: ' #F1F1F1', }}/>
            <FaStar style={{ color: ' #F1F1F1'}}/>
            <p>n50.000</p>
            <button>add to cart</button>
            </div>
        </Card>
        </div>
        </div>
    </div>
    
  )
}
