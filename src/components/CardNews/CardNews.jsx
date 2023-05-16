import React, { useEffect, useState } from 'react';

//Redux
import { useSelector,useDispatch } from 'react-redux';
import fetchData from '../../Redux/datacounter/dataAction';

//Styled
import "./CardNews.css";
//Component
import Cards from '../Cards/Cards';

function CardNews() {
  const state=useSelector(state=>state.datas)
  const dispatch=useDispatch();

  //fecth api in redux
  useEffect(()=>{
    dispatch(fetchData())
  },[])

  console.log(state.loading);

  const loading=state.loading || false;
  const articles =state.data.articles || [];

  return (    
    <div className='cardContainer'>
      {loading ? <span>Loading...</span> :articles.map((item,index)=>(
        <Cards key={index} data={item}/>
        ))}
    </div>
  )
}

export default CardNews