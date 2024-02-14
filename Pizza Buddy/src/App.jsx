import Home from './Pages/Home'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Pizzabuddy from './Pages/Pizzabuddy'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mynavbar from './Components/Header/Mynavbar'
import Products from './Pages/Products'
import './App.css';
function App() {

  return (
    <>

      <Router>
        <Mynavbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizzabuddy' element={<Pizzabuddy />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
