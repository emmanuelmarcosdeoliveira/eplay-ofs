import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Product from './pages/Product'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/produto/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default MainRoutes
