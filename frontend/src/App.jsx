import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AboutCompany from "./pages/AboutCompany";
import Footer from "./components/Footer";
import { ContactUs } from "./pages/ContactUs";
export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/aboutcompany" element={<AboutCompany/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}