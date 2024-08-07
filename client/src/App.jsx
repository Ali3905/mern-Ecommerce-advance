import './App.css'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Product from './pages/Product'
import Cart from './pages/cart'
import Account from './pages/account'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import AuthState from './context/AuthState'

function App() {

  axios.defaults.baseURL = import.meta.env.VITE_SERVER_HOST

  return (
    <>
    <AuthState>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </AuthState>
    </>
  )
}

export default App
