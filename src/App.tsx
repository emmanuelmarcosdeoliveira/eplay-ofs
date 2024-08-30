import {createBrowserRouter,  RouterProvider} from "react-router-dom"


import Banner from './components/Banner';
import Header from './components/Header';
import { GlobalStyles } from './styles';

function App() {
  const routers  = createBrowserRouter([
    {
      path: "/",
      element: <Banner />
    }, 
    
  ])
  return (
    <>
      <GlobalStyles />
      <div className='wrapper'>
        <Header />
      </div>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
