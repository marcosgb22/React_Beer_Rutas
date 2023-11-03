import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer';


function App() {

    const greet = "Bienvenidos a Öl Beer";


    return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={greet}/>
      <Footer/>

    </>
  )
}

export default App


