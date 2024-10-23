import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from '../styles/styles'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import MainRoutes from './routes'
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <div className="wrapper">
            <Header />
          </div>
          <MainRoutes />
          <Footer />
          <Cart />
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App
