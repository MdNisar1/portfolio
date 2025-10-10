import React from 'react'
import Home from '../../components/home/home'
import Navbar from '../../components/navbar/navbar'
import About from '../../components/About/about'
import Footer from '../../components/Footer/footer'
import Project from '../../components/Projects/project'
import Contact from '../../components/Contact/contact'
import Skills from '../../components/Skills/skills'


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