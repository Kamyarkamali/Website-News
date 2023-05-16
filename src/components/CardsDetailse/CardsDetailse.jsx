import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import fetchData from "../../Redux/datacounter/dataAction";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//styled
import "./CardsDetailse.css";
function CardsDetailse() {
  const {author}=useParams()
  const dispatch=useDispatch()
    const state=useSelector(state=>state.datas.data.articles)
    // const fintData=state.find(item=>item.author===author)
    const findData = state && state.find(item => item.author === author);


  useEffect(()=>{
    dispatch(fetchData())
  },[])

  console.log(findData)


  if (!state) {
    return <div>Loading...</div>;
  }

  if (!findData) {
    return <div>Author not found</div>;
  }

  const {url,urlToImage,title,description,publishedAt,content}=findData

  return (
    <div className='detailseContainer'>
      <Link to={"/"}><ArrowBackIcon className='icon'/></Link>
      <div className="imagetitle">
        <Link to={"/"}> 
        <span>Go To NEWS</span>
        </Link>
        <img src={urlToImage} alt="images" />
        <p style={{color:"red",fontSize:"20px"}}>{title}</p>
        <p>{description}</p>
        <p>Date: {publishedAt}</p>
        <p>Content: {content}</p>
        <a href={url} target='_blank'>Link News</a>
      </div>
    </div>
  )
}

export default CardsDetailse