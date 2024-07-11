import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header = () => {
  const itemsInCart = 3; // Replace with the actual number of items in the cart

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    transition: 'color 0.3s' // Smooth transition for color change
  };

  const handleLinkHover = (event) => {
    event.target.style.color = '#0E69CD'; // Change the color on hover
  };

  const handleLinkHoverExit = (event) => {
    event.target.style.color = 'black'; // Revert the color when not hovered
  };

  return (
    <div className='HeaderCont'>
      <div>
        <Link to={'/'} style={{ ...linkStyle, fontWeight: 'bold' }} onMouseOver={handleLinkHover} onMouseOut={handleLinkHoverExit}>
          <h5>BEREL SHOP</h5>
        </Link>
        <h4>LIMITED EDITION</h4>
      </div>
      <div>
        <nav>
          <Link to={'/product'} style={linkStyle} onMouseOver={handleLinkHover} onMouseOut={handleLinkHoverExit}>Product</Link>
          <Link to={'/pages'} style={linkStyle} onMouseOver={handleLinkHover} onMouseOut={handleLinkHoverExit}>Pages</Link>
          <Link to={'/MyAccount'} style={linkStyle} onMouseOver={handleLinkHover} onMouseOut={handleLinkHoverExit}>My Account</Link>

          <Link to={'/Cart'} style={{ ...linkStyle, position: 'relative' }} onMouseOver={handleLinkHover} onMouseOut={handleLinkHoverExit}>
            <FaShoppingBag style={{ fontSize: '24px' }} />
            {itemsInCart > 0 && (
              <span style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'red',
                color: 'white',
                borderRadius: '50px',
                padding: '1px 3px',
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
