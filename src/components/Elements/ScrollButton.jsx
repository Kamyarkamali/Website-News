import React, { useEffect, useState } from "react"

import "./ScrollButton.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function ScrollButton() {
  const [button,setButton]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",handelScroll)
    return()=>{
      window.removeEventListener("scroll",handelScroll)
    }
  },[])

  const handelScroll=()=>{
    if(window.scrollY >100){
      setButton(true)
    } else{
      setButton(false)
    }
  }

  const handelClick=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }

  return (
    <div className="btn">
      <button onClick={handelClick}><ArrowUpwardIcon/></button>
    </div>
  )
}

export default ScrollButton