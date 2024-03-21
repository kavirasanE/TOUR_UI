import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AboutCompany from "./pages/AboutCompany";
import Footer from "./components/Footer";
export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/aboutcompany" element={<AboutCompany/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}