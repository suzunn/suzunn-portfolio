'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BlurIn } from "@/components/ui/blur-in"
import { GradientText } from "@/components/ui/gradient-text"
import { LogoCarousel } from './ui/logos3'
//import { GlowEffect } from "@/components/ui/glow-effect"
//import { BorderTrail } from "@/components/ui/border-trail"
import { GradientTracing } from './ui/bolt'
import { FeaturesSectionWithHoverEffects } from './blocks/feature-section-with-hover-effects'

export default function Skills() {
  const [shouldRenderTracing, setShouldRenderTracing] = useState(false);

  useEffect(() => {
    // İlk render'da window genişliğini al
    setShouldRenderTracing(window.innerWidth > 768);

    // Resize event listener
    const handleResize = () => {
      setShouldRenderTracing(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 text-white relative min-h-screen overflow-hidden">
      {shouldRenderTracing && (
        <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 flex items-start justify-center pointer-events-none" style={{ top: '90px' }}>
          <GradientTracing
            width={window.innerWidth}
            height={60}
            baseColor="transparent"
            gradientColors={["#ff40b3", "#4079ff", "#40ffaa"]}
            animationDuration={10}
            strokeWidth={2}
            path={`M0,30 L${window.innerWidth},30`}
            noTrail={true}
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <BlurIn 
          word={
            <GradientText
              colors={["#ff40b3", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              Skills
            </GradientText>
          }
          duration={1.5}
          className="text-center mb-12"
        />
        
        <FeaturesSectionWithHoverEffects />

        <div className="mt-16 mb-8">
          <BlurIn 
            word={
              <GradientText
                colors={["#ff40b3", "#4079ff", "#40ffaa"]}
                animationSpeed={5}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
              >
                Certificates
              </GradientText>
            }
            duration={1.5}
            className="text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <a href="/Certificate_DataScienceSAU.pdf" target="_blank" rel="noopener noreferrer">
              <div className="relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-[#ff40b3] via-[#4079ff] to-[#40ffaa]">
                <div className="relative overflow-hidden rounded-xl bg-[#030711] group-hover:bg-gradient-to-r 
                              group-hover:from-[#ff40b3]/10 group-hover:via-[#4079ff]/10 group-hover:to-[#40ffaa]/10
                              transition-all duration-500">
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10 
                                transition-opacity group-hover:opacity-0"/>
                  <img 
                    src="/sau_sertifika.png"
                    alt="Data Science Certificate"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="px-6 py-3 rounded-lg backdrop-blur-sm bg-black/50
                                 border border-white/10 shadow-lg
                                 transform transition-all duration-300
                                 group-hover:scale-110 group-hover:bg-black/70">
                      <h3 className="text-2xl font-black text-transparent bg-clip-text
                                   bg-gradient-to-r from-[#ff40b3] via-[#4079ff] to-[#40ffaa]">
                        Data Science Certificate
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff40b3] via-[#4079ff] to-[#40ffaa] 
                          rounded-xl blur-xl group-hover:opacity-50 opacity-0 transition-opacity duration-500 -z-10"/>
          </motion.div>
        </div>

        <div className="mt-16 mb-8">
          <BlurIn 
            word={
              <GradientText
                colors={["#ff40b3", "#4079ff", "#40ffaa"]}
                animationSpeed={5}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
              >
                Technologies I Use
              </GradientText>
            }
            duration={1.5}
            className="text-center"
          />
        </div>

        <div className="mt-8">
          <LogoCarousel />
        </div>
      </div>
    </section>
  )
}
