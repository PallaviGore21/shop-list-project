import React from 'react'
import Nav from './components/Nav'
import Addshop from './pages/Addshop'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'


export default function App() {
  return <>
  
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path="/" element={<Addshop/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  
  </>
}
