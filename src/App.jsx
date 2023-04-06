import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
 

function App() {
  return (
    <div className='App'>
      <h1>Welcome to nextPage! App!!!</h1>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
