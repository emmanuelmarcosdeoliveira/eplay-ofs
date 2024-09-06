import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from '../styles/styles'
import Header from './components/Header'
import MainRoutes from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <div className="wrapper">
          <Header />
        </div>
        <MainRoutes />
      </BrowserRouter>
    </>
  )
}
export default App
