import React from 'react';

///iamges
import image1 from "../../assets/mobile.jpg";
import image2 from "../../assets/tv.jpg";

//styled
import "./Logo.css";

function Logo() {
  return (
    <div className='textt'>
    <h3 style={{textAlign:"center",color:"red"}}>Follow us on television and mobile</h3>
    <div className='containerimage'>
        <img src={image1} alt="images" />
        <img src={image2} alt="images" />
    </div>
    </div>
  )
}

export default Logo