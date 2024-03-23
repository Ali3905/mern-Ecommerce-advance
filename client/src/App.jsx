import './App.css'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Product from './pages/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'

function App() {

  axios.defaults.baseURL = "http://localhost:5000/"

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
