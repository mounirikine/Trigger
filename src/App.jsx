import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Events from "./pages/Events"
import Videos from "./pages/Videos"

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/WatchVideos' element={<Videos />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}

export default App
