import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar/Navbar"

 

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        {/* navbar */}
        <Navbar></Navbar>
      </header>

        {/* main section */}

      <main> 
        <Outlet></Outlet>
      </main>
      <footer>
        {/* footer */}
      </footer>
    </div>
  )
}

export default MainLayout