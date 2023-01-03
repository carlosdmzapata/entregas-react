import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import HeadBannerComponent from './components/pages/headBanner/headBannerContainer'
import Titulo from './components/titulo/titulo'
import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetail from './components/ItemDetailContainer/ItemDetail'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
       <NavBar />    
       <ItemListContainer greetings = {'¡Hello!'} /> 
       <ItemDetail Produ = {'T-SHIRT'} />
    </>
  )
}

export default App


//<HeadBannerComponent greetings = {'saludo'}>
  //<Titulo />
//</HeadBannerComponent>