import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
      </Routes>
    </>
  )
}

export default MainRoutes
