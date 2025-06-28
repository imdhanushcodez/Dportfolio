import Aboutme from "../Components/Aboutme"
import { ContactSection } from "../Components/ContactSection"
import { Footer } from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import NavBar from "../Components/NavBar"
import ProjectsSection from "../Components/ProjectsSection"
import SkillsSection from "../Components/SkillsSection"
import StarBackground from "../Components/StarBackground"
import ThemeToggle from "../Components/ThemeToggle"
import React from 'react'

function Home() {


  return (

    <div className="min-h-screen bg-background">
        <ThemeToggle/>
        <StarBackground/>
        <NavBar/>

        <main>
            <HeroSection/>
            <Aboutme/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
            <Footer/>
        </main>


    </div>
  
  )
}

export default Home