import{BrowserRouter, Route, Routes} from 'react-router-dom'


import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './components/Cart Container/CartContainer'
import { Alert } from 'bootstrap'
import { CartContextProvider } from './Context/CartContext'

function App() {


  return (
   <div 
    className='border border-5 border-primary'>
    <BrowserRouter>
    <CartContextProvider>
     <NavBar />
     <Routes>   
      <Route path='/' element={<ItemListContainer greetings = {'¡Welcome!'} />} />
      <Route path='/category/:id' element={<ItemListContainer greetings = {'¡Welcome!'} />} />
      <Route path='/detail/:productid' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<CartContainer />} />
     </Routes>
    </CartContextProvider>
    </BrowserRouter>
   </div>
  )
}

export default App


//<HeadBannerComponent greetings = {'saludo'}>
  //<Titulo />
//</HeadBannerComponent>