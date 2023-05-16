import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Helpers
import { shorten } from '../helpers/shorten';
//styled
import "./Cards.css";

//Icon
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

function Cards({data}) {
  const [like,setLike]=useState(false)
  const [saved,seSaved]=useState(false)

  //Clike Like
  const clickLike=()=>{
    setLike(!like)
  }


  //saved
  const clickASaved=()=>{
    seSaved(!saved)
  }

  return (
    <div className='cardscontainer'>
        {!like ?<FavoriteBorderIcon onClick={clickLike} className='iconlike' fontSize='medium'/> : <FavoriteIcon className='unlike' onClick={clickLike}/>}
        {!saved?<TurnedInNotIcon onClick={clickASaved} className='saved'/>:
        <TurnedInIcon onClick={clickASaved} className='unsaved'/>}
        <Link to={`/cardsdetailse/${data.author}`}>
        <span className='date' style={{color:"blue"}}>{data.publishedAt}</span>
        <img src={data.urlToImage} alt={data.title} />
        <span className='spanss'>{data.title}</span>
        <span className='spans'>{data.content}</span>
        <a href="#">Detailse News</a>
        </Link>
    </div>
  )
}

export default Cards