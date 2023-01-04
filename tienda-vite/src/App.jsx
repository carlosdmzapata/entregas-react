import{BrowserRouter, Route, Routes} from 'react-router-dom'


import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetail from './components/ItemDetailContainer/ItemDetail'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <BrowserRouter>
     <NavBar />
     <Routes>   
      <Route path='/' element={<ItemListContainer greetings = {'¡Hello!'} />} />
      <Route path='/detalle' element={<ItemDetail Produ = {'T-SHIRT'} />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App


//<HeadBannerComponent greetings = {'saludo'}>
  //<Titulo />
//</HeadBannerComponent>