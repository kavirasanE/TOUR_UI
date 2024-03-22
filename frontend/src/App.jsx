import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AboutCompany from "./pages/AboutCompany";
import Footer from "./components/Footer";
import { ContactUs } from "./pages/ContactUs";
import TourCategory from "./pages/TourCategory";
import Testimonals from "./pages/Testimonals";
import TourPage from "./pages/TourPage";
import Faq from "./pages/Faq";
export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" exact element={<AboutCompany/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/tourcategory" element={<TourCategory/>}/>
    <Route path="/testimonals" element={<Testimonals/>}/>
    <Route path="/tourpage" element={<TourPage/>}/>
    <Route path="/faq" element={<Faq/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}