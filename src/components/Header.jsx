import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header = () => {
  const itemsInCart = 3; // Replace with the actual number of items in the cart

  return (
    <div className='HeaderCont'>
      <div>
        <h5>BEREL SHOP</h5>
        <h4>LIMITED EDITION</h4>
      </div>
      <div>
        <nav>
          <Link to={'/product'} style={{ textDecoration: 'none', color: 'black' }}>Product</Link>
          <Link to={'/pages'} style={{ textDecoration: 'none', color: 'black' }}>Pages</Link>
          <Link to={'/MyAccount'} style={{ textDecoration: 'none', color: 'black' }}>My Account</Link>

          <Link to={'/Cart'} style={{ position: 'relative', textDecoration: 'none', color: 'black' }}>
            <FaShoppingBag style={{ fontSize: '24px' }} />
            {itemsInCart > 0 && (
              <span style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'red',
                color: 'white',
                borderRadius: '50px',
                padding: ' 1px 3px',
                fontSize: '10px'
              }}>
                {itemsInCart}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
