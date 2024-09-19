import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Product from './pages/Product'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/produto/:id" element={<Product />} />
      </Routes>
    </>
  )
}

export default MainRoutes
