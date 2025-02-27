'use client'
import { motion } from 'framer-motion'
import { BlurIn } from "@/components/ui/blur-in"
import { GradientText } from "@/components/ui/gradient-text"
import { GlareCard } from './ui/glare-card'
import { GlowEffect } from './ui/glow-effect'
import { HoverButton } from './ui/hover-button'
import { GradientTracing } from './ui/zigzag'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'Atomic Habits Chatbot 📚',
    description: 'AI-powered chatbot that helps you build better habits',
    tags: ['NLP', 'API Integration', 'PDF Chatbot'],
    image: '/atomic_habits.png',
    link: 'https://github.com/suzunn/atomic-habits-chatbot'
  }
]

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 text-white relative">
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 flex items-start justify-center pointer-events-none" style={{ top: '90px' }}>
        <GradientTracing 
          width={windowWidth}
          height={100}
          path={`M0,50 L${windowWidth * 0.25},20 L${windowWidth * 0.5},80 L${windowWidth * 0.75},30 L${windowWidth},60`}
          gradientColors={["#ff40b3", "#4079ff", "#40ffaa"]}
          animationDuration={8}
          strokeWidth={2}
          baseColor="transparent"
          noTrail={true}
        />
      </div>
      <div className="container mx-auto px-4">
        <BlurIn 
          word={
            <GradientText
              colors={["#ff40b3", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold py-2"
            >
              Projects
            </GradientText>
          }
          duration={1.5}
          className="text-center mb-16 pt-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="relative isolate w-[320px] h-[240px]">
                <GlowEffect
                  colors={['#60A5FA', '#3B82F6', '#2563EB']}
                  mode="breathe"
                  blur="soft"
                  scale={1.1}
                  duration={3}
                  className="absolute inset-0 z-[-1] scale-125 transform-gpu"
                  style={{
                    transform: 'translate(-12.5%, -12.5%) scale(1.25)',
                  }}
                />
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <GlareCard className="relative w-full h-full">
                    {project.image && (
                      <div className="absolute inset-0">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="320px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                          <h3 className="text-lg font-bold mb-1.5 text-white line-clamp-1">{project.title}</h3>
                          <p className="text-sm text-gray-200 mb-2 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <HoverButton
                                key={tag}
                                className="!px-3 !py-1 text-sm bg-black/50 backdrop-blur-sm text-white"
                              >
                                {tag}
                              </HoverButton>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </GlareCard>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
