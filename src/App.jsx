import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Events from "./pages/Events"
import Videos from "./pages/Videos"
import MarketPlace from "./pages/MarketPlace"
import Messages from "./pages/Messages"
import ChatRoom from "./pages/ChatRoom"

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/WatchVideos' element={<Videos />} />
      <Route path='/MarketPlace' element={<MarketPlace />} />
      <Route path='/Messages' element={<Messages />} />
      <Route path='/chatRoom' element={<ChatRoom />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}

export default App
