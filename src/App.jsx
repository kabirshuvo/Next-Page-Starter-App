import { Outlet } from "react-router-dom"
import Home from "./components/Header/Home/Home"

function App() {
  return (
    <div className='App'>
      <h1>Welcome to nextPage!</h1>
      
      <Outlet></Outlet>
    </div>
  )
}

export default App
