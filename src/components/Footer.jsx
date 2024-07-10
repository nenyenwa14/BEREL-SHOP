import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
  return (
    <div style={{height: 'auto', background: '#222222', zIndex:'2'}}>
        <div  style={{display:'flex', columnGap: '200px', padding: '100px'}}>
            
            <div>
                <h3 style={{color: 'white',fontSize: '30px',textTransform: 'uppercase'}}>information</h3>
                <h6 style={{ lineHeight: '30px',color: 'white',fontSize: '18px'}}>About Shop <br /> Our Location <br />Delivery Information <br /> Terms & Conditions</h6>
            </div>

            <div>
            <h3 style={{color: 'white',fontSize: '30px',textTransform: 'uppercase'}}>contact</h3>
            <h6 style={{color: 'white', lineHeight: '30px',fontSize: '18px'}}>152, Commercial Avenue <br /> Yaba, Lagos <br />info@berelshop.com</h6>
            </div>
        </div>
        <div style={{height: '120px', background: '#000000'}}>
            <div style={{display:'flex', justifyContent: 'space-between', padding: '50px 20px'}}>
            <div>
                <p style={{color: 'white', fontSize: '15px'}} >&copy; 2024 BEREL SHOP & Revnet. All rights reserved.</p>
            </div>
            <div>
            <FaFacebook style={{ color: 'white'}}/>
            <FaTwitter style={{ color: 'white'}}/>
            <FaLinkedin style={{ color: 'white'}}/>
            </div>
            </div>
        </div>    
    </div>
    
  )
}
