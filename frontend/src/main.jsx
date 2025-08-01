import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './Landing_page/Home/Home.jsx'
import { Signup } from './Landing_page/Signup/Signup.jsx'
import { About } from './Landing_page/About/About.jsx'
import { Product } from './Landing_page/Product/Product.jsx'
import { Pricing } from './Landing_page/Pricing/Pricing.jsx'
import { Support } from './Landing_page/Support/Support.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Landing_page/Navbar'
import { Footer } from './Landing_page/Footer'
import { NotFound } from './Landing_page/NotFound.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/products' element={<Product/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
    <Route path='/support' element={<Support/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
   </Routes>
    <Footer/>
   </BrowserRouter>
   
  </StrictMode>,
)
