import React, { useEffect } from 'react'
import './App.css'

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Modal from './components/Modal/ShowModal';
import CardsDetailse from './components/CardsDetailse/CardsDetailse';

import { Route,Routes } from 'react-router-dom';



///React-Router-Dom;



function App() {


  useEffect(()=>{
    document.title="KAM News"
  },[])



  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/cardsdetailse/:author/' element={<CardsDetailse/>}/>
      {/* <Modal/> */}
      </Routes> 
    </div>
  )
}

export default App
