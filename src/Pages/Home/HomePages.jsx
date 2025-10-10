import React from 'react'

import About from '../../components/About/about'
import Footer from '../../components/Footer/footer'
import Project from '../../components/Projects/project'
import Contact from '../../components/Contact/contact'
import Skills from '../../components/Skills/Skills'
import Navbar from '../../components/Navbar/navbar'
import Home from '../../components/home/home'


const HomePages = () => {
  return (
   <>
  <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Project/>
   <Contact/>
   <Footer/>
   
   </>
  )
}

export default HomePages