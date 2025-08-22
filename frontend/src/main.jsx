import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import HomePage from '/src/landing_page/home/HomePage.jsx'
import AboutPage from '/src/landing_page/about/AboutPage.jsx'
import PricingPage from '/src/landing_page/pricing/PricingPage.jsx'
import ProductPage from '/src/landing_page/products/ProductPage.jsx'
import SupportPage from '/src/landing_page/support/SupportPage.jsx'
import Navbar from "/src/landing_page/Navbar.jsx";

import Footer from "/src/landing_page/Footer.jsx";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>                                                  
  <Navbar/>
  <Routes>
    <Route path = "/" element = {<HomePage/>}></Route>
    <Route path = "/about" element = {<AboutPage/>}></Route>
    <Route path = "/pricing" element = {<PricingPage/>}></Route>
    <Route path = "/products" element = {<ProductPage/>}></Route>
    <Route path = "/support" element = {<SupportPage/>}></Route>
    
  </Routes>
  <Footer/>
  </BrowserRouter>
)
