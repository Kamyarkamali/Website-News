import React, { useEffect, useRef, useState } from 'react';

//Redux

///Styled
import "./Header.css";

//Iocns
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ScrollButton from '../Elements/ScrollButton';
import Suporter from '../Elements/Suporter';
import Search from '../SearchBar/Search';

function Header() {
    
    const menuRef=useRef(null)
    const [showMenu,setShowMenu]=useState(false);


    // console.log(state);
    

//CLOSE MENU
    useEffect(()=>{
        const handleMenuOptionClick=(e)=>{
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setShowMenu(false)
            }
        }
            document.body.addEventListener("click",handleMenuOptionClick)

            return ()=>{
                document.body.removeEventListener("click",handleMenuOptionClick)
            }
        
    },[])

    const showMenuHamburger=()=>{
        setTimeout(()=>{
            setShowMenu(!showMenu)
        },200)
    }

    const closeHandel=()=>{
        setShowMenu(!showMenu)
    }

  return (
    <div>
    <div className='containerheader'>
        <div className="detailse">            
            <div className="kam">
                <span>K</span>
                <span>A</span>
                <span>M</span>
            </div>
            <div className="user">
            <PersonIcon fontSize='large'/>
            <span>Sing In</span>
            </div>

            <div className="list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Reel</a></li>
                    <li><a href="#">Worklife</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Future</a></li>
                    <li><a href="#">Culture</a></li>
                </ul>
            </div> 

            <div className="menu">
                <MoreHorizIcon/>
                    {/* <input type="text" placeholder='KAM Search'/> */}
                    <Search/>
                    
            </div>
            <div className="hamburgermenu">
                <div className='icons'>
            {!showMenu ?<MenuIcon ref={menuRef} onClick={showMenuHamburger}/>
           : <CloseIcon onClick={showMenuHamburger}/> }
           </div>
            {showMenu&&<div className="listhamburger">
                <ul>
                    <li onClick={closeHandel} ><a href="#">Home</a></li>
                    <li onClick={closeHandel}><a href="#">News</a></li>
                    <li onClick={closeHandel}><a href="#">Sport</a></li>
                    <li onClick={closeHandel}><a href="#">Reel</a></li>
                    <li onClick={closeHandel}><a href="#">Worklife</a></li>
                    <li onClick={closeHandel}><a href="#">Travel</a></li>
                    <li onClick={closeHandel}><a href="#">Future</a></li>
                    <li onClick={closeHandel}><a href="#">Culture</a></li>
                </ul>
            </div> } 
            </div>
        </div>     
        <ScrollButton/>   
        <Suporter/>
    </div>
    </div>
  )
}

export default Header