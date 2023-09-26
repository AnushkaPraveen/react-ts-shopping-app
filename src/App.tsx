//import './App.css'
import { Routes, Route } from "react-router-dom"
//import CartItem from './components/modules/CartItem'; */
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ProfileView from './pages/ProfileView';
import Cart from './pages/Cart';
import ProductDetailsView from './pages/ProductDetailsView';
import LoginView from "./pages/LoginView";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services/:productId" element={<ProductDetailsView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
