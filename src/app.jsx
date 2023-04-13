import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Projects from './components/projects/projects'
import Extracurriculars from './components/extracurric/extracurriculars'
import Skills from './components/skills/skills'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const app = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Extracurriculars />
    <Skills />
    <Contact />
    <Footer/>
    </>
  )
}

export default app