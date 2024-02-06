import Home from './Pages/Home'
import About from './Pages/About'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
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
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products />} />
       </Routes>
    </Router>
    </>
  )
}

export default App
