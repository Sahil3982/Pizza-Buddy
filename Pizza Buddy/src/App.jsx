import Home from './Pages/Home'
import About from './Pages/About'
import { Contactus } from './Pages/Contactus'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Mynavbar from './Components/Header/Mynavbar'

function App() {

  return (
    <>
    <h2>Hello App</h2>
    <Router>
      <Mynavbar />

       <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/Contactus' element={<Contactus />} />
       </Routes>
    </Router>
    </>
  )
}

export default App
