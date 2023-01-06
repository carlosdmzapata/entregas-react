import{BrowserRouter, Route, Routes} from 'react-router-dom'


import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './components/Cart Container/CartContainer'

function App() {


  return (
    <BrowserRouter>
     <NavBar />
     <Routes>   
      <Route path='/' element={<ItemListContainer greetings = {'¡Welcome!'} />} />
      <Route path='/category/:id' element={<ItemListContainer greetings = {'¡Welcome!'} />} />
      <Route path='/detail/:productid' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<CartContainer />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App


//<HeadBannerComponent greetings = {'saludo'}>
  //<Titulo />
//</HeadBannerComponent>