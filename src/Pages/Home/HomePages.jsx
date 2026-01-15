import React from 'react'

import About from '../../components/About/about'
import Footer from '../../components/Footer/footer'
import Project from '../../components/Projects/project'
import Contact from '../../components/Contact/contact'
import Skills from '../../components/Skills/Skills'
import Navbar from '../../../src/components/Navbar/navbar.jsx'
import Home from '../../../src/components/Home/Home.jsx';

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