import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {

    const greet = "Bienvenidos";


    return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={greet}/>

    </>
  )
}

export default App


