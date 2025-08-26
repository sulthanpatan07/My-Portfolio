import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App