import React,{useEffect,useState} from 'react'
import RandomText from '../RandomText/RandomText'
import Logo from '../Logo/Logo'
import Counter from '../Counter/Counter'
import CardNews from '../CardNews/CardNews'
import axios from 'axios'
import CardsDetailse from '../CardsDetailse/CardsDetailse'

import { Route,Routes } from 'react-router-dom';




function Home() {
  const [images,setImages]=useState([]);
  

  useEffect(()=>{
    axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-04-14&sortBy=publishedAt&apiKey=3b49fd82ee104ee4a0de3e8b6b13fcff")
    .then(response=>{
      const filteredArticles = response.data.articles.filter(article => article.urlToImage);
      const imagesUrl=filteredArticles.map((item)=>item.urlToImage)
      setImages(imagesUrl)
    })
  },[])


  return (
    <div>
        <RandomText/>
        {/* <BackgroundVideo/> */}
        <Logo/>
        <Counter/>
        <CardNews/>
        <Routes>
          {/* <Route path='/cardsdetailse/:author/' element={<CardsDetailse/>}/> */}
        </Routes>
    </div>
  )
}

export default Home