import Navbar from "./components/Navbar"
import Feedback from "./components/Feedback"
import ForgotPassword from "./components/ForgotPassword"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Subscription from "./components/Subscription"
import { Route, Routes } from "react-router-dom"
import Coaching from "./components/Coaching"


function App() {
  return(
    <>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/coaching" element={ <Coaching/> } />
            <Route path="/login" element={ <Login/>} />
            <Route path="/feedback" element={ <Feedback/>} />
            <Route path="/subscription" element={ <Subscription/>} />
            <Route path="/forgot-password" element={ <ForgotPassword />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </div> 
    </> 
  )
}

export default App