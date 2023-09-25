//import './App.css'
import { Routes, Route } from "react-router-dom"
//import CartItem from './components/modules/CartItem'; */
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ProfileView from './pages/ProfileView';
import SignIn from './components/modules/user/SignIn';
import Cart from './pages/Cart';
import ProductDetailsView from './pages/ProductDetailsView';

function App() {

  return (
    <>
     <Header/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="services/:productId" element={ <ProductDetailsView/> } />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<ProfileView/>} />
        <Route path="/login" element={<SignIn/>} />
      </Routes>
  
    {/*  <SignIn/> */}
    {/* <ProfileView/> */}
   {/*  <Cart/> */}
   {/* <ProductDetailsView/> */}
     <Footer/>
    </>
  )
}

export default App
