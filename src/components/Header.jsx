import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return(
    <div className='HeaderCont'>
    <div>
        <h5>BEREL SHOP</h5>
        <h4>LIMITED EDITION </h4>
    </div>
    <div>
      <nav>
        <Link to={'/product'} style={{textDecoration: 'none',color: 'black'}}>Product</Link>
        <Link to={'/pages'}  style={{textDecoration: 'none',color: 'black'}}> Pages</Link>
        <Link to={'/MyAccount'}  style={{textDecoration: 'none',color: 'black',}}>My Account</Link>
      </nav>
    </div>
    </div>
   )
}
export default Header




