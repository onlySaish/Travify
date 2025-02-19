import './App.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements,Route} from "react-router"
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignupPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* /Route> */}
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
