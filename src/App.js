import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import CartPage from './components/Cart/CartPage'
import Footer from './components/Footer/Footer'
import BoysPage from './components/MainPages/BoysPage/BoysPage'
import GirlsPage from './components/MainPages/GirlsPage/GirlsPage'
import MenPage from './components/MainPages/MenPage/MenPage'
import MensAppendData from './components/MainPages/MenPage/MensAppendData'
import WomenPage from './components/MainPages/WomenPage/WomenPage'
import Navbar from './components/Navbar/Navbar'
import ProductDetails from './components/ProductDetailInfo/ProductDetails'
import Checkout from './components/Checkouts/Checkout'
import Payment from './components/Checkouts/Payment'
import OtpPage from './components/Checkouts/OtpPage'

function App() {
  
  return (
    <div>

      <Navbar />
    
      {/* <OtpPage/> */}
      <Routes>
        <Route path="/" element={<WomenPage />}></Route>
        <Route path="/mens" element={<MenPage />}></Route>
        <Route path="/menproducts" element={<MensAppendData/>}></Route>
        <Route path="/menproducts/:id" element={<ProductDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/boys" element={<BoysPage/>}></Route>
        <Route path="/girls" element={<GirlsPage/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/otp" element={<OtpPage/>}></Route>



      </Routes>
      {/* <CartPage /> */}
      <Footer />
    </div>
  )
}

export default App
