'use client'
import dynamic from 'next/dynamic'
import { Home as HomeIcon, User, Briefcase, Code } from 'lucide-react'
import { motion } from "framer-motion"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Particles } from "@/components/ui/particles"

// Dinamik importları optimize edelim
const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false,
  loading: () => <div className="min-h-screen" /> 
})
const About = dynamic(() => import('@/components/About'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
})
const Skills = dynamic(() => import('@/components/Skills'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
})
const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
})
const NavBar = dynamic(() => import('@/components/ui/tubelight-navbar').then(mod => mod.NavBar), {
  ssr: false,
  loading: () => <div className="h-16" />
})
const SplashCursor = dynamic(() => import('@/components/ui/splash-cursor').then(mod => mod.SplashCursor), {
  ssr: false 
})

export default function Home() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: HomeIcon },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Skills', url: '#skills', icon: Code }
  ]

  return (
    <main className="min-h-screen bg-black relative">
      {/* Navbar Layer (En üstte olmalı) */}
      <NavBar items={navItems} className="mt-4 md:mt-8 z-[999]" />

      
      {/* Background Layer (z-0) */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Particles
          className="absolute inset-0"
          quantity={200}
          staticity={50}
          ease={50}
          size={0.5}
          color="#4c1d95"
        />
      </div>

      {/* Fluid Cursor Effect Layer (z-5) */}
      <div className="fixed inset-0 w-full h-full z-[5]">
        <SplashCursor 
          SPLAT_RADIUS={0.3}
          DENSITY_DISSIPATION={2}
          COLOR_UPDATE_SPEED={5}
          SPLAT_FORCE={4000}
          BACK_COLOR={{ r: 0, g: 0, b: 0 }}
          TRANSPARENT={true}
        />
      </div>
      
      {/* Content Layer (z-index düşürüldü) */}
      <div className="relative z-[10] pointer-events-auto">
        {/* Light Effect */}
        <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
          {/* Left beam - Sol ışık demeti */}
          <div className="absolute top-0 left-1/2 z-50 h-[40rem] w-[600px] origin-top-right -rotate-[30deg] bg-gradient-to-b from-primary/50 to-transparent opacity-40 blur-3xl" />

          {/* Right beam - Sağ ışık demeti */}
          <div className="absolute top-0 right-1/2 z-50 h-[40rem] w-[600px] origin-top-left rotate-[30deg] bg-gradient-to-b from-primary/50 to-transparent opacity-40 blur-3xl" />

          {/* Center source - Merkezdeki ışık kaynağı */}
          <motion.div
            initial={{ width: "200px", opacity: 0 }}
            animate={{ width: "300px", opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="absolute top-0 z-30 h-32 rounded-full bg-primary/80 blur-2xl"
          />

          {/* Ambient glow - Ortam ışığı */}
          <div className="absolute top-32 z-40 h-96 w-[1000px] bg-primary/20 opacity-30 blur-3xl rounded-full" />

          {/* Top line - İnce çizgi */}
          <motion.div
            initial={{ width: "150px", opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="absolute top-0 z-50 h-[2px] bg-primary rounded-full"
          />
        </div>

        <section id="hero" className="relative z-[100] pointer-events-auto">
          <Hero />
        </section>
        
        <section id="about" className="relative z-[80]">
          <About />
        </section>
        
        <section id="projects" className="relative z-[70]">
          <Projects />
        </section>
        
        <section id="skills" className="relative z-[60]">
          <Skills />
        </section>
        
        {/* Contact section'ı tamamen kaldırıyoruz */}
      </div>
      
      {/* Footer'ı en üst katmana taşıyoruz ve pointer-events'i aktif ediyoruz */}
      <div className="relative z-[999] pointer-events-auto">
        <StackedCircularFooter />
      </div>
    </main>
  )
}
