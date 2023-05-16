import React from 'react';
import Typewriter from "typewriter-effect";
import "./RandomText.css";

function RandomText() {
  return (
    <div className='containertext'>
        <Typewriter 
        options={{
            strings:["Live and real-time reports","KAM News","Our slogan: Freedom of information for all."],
            autoStart:true,
            loop:true,
        }}
        />
    </div>
  )
}

export default RandomText