import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from '../styles/styles'
import Header from './components/Header'
import MainRoutes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <div className="wrapper">
          <Header />
        </div>
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
