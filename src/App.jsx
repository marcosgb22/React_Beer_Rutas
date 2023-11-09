import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Look from './components/Look/Look';
import Contactos from './components/Contactos/Contactos';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemContainerDetail from './components/ItemListConteinerDetail/ItemListConteinerDetail';


function App() {

    const greet = "Bienvenidos a Öl Beer";


    return (
    <>


      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
            
          <Route path='/look' element={<Look/>}/>

          <Route path='/contactos' element={<Contactos/>}/>

          <Route path='/item/:idProduct' element={<ItemContainerDetail/>}/>

          <Route path='*' element={<Error/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App


