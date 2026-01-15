import React from 'react'

import About from '../../components/About/about'
import Footer from '../../components/Footer/footer'
import Project from '../../components/Projects/project'
import Contact from '../../components/Contact/contact'
import Skills from '../../components/Skills/Skills'
import Navbar from '../../components/Navbar/navbar'
import Home from '../../components/Home/Home'
import Education from '../../components/Education/education'


const HomePages = () => {
  return (
   <>
  <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Education/>
   <Project/>
   <Contact/>
   <Footer/>
   
   </>
  )
}

export default HomePages