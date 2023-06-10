import React from 'react';
import "./Footer.css"
import assets from '../../assets';

const Footer = () => {
return (
<>
            <div className='footer'>
                <p style={{marginTop:'10px'}}>Copyright© 2023 <a href='mailto:sharmaparth6321@gmail.com' style={{color:'red',textDecoration:'none',fontSize:'large'}}>Parth Sharma</a>, <a href='mailto:ayushmaan.jangid.e21@nsut.ac.in' style={{color:'red',textDecoration:'none',fontSize:'large'}}>Ayushmaan Jangid</a>, <a href='mailto:kumarpp9718@gmail.com' style={{color:'red',textDecoration:'none',fontSize:'large'}}>Pawan Kumar Verma</a></p>
            </div>
        </>
);
}

export default Footer;