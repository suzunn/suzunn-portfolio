'use client'
import { motion } from 'framer-motion'
import { BlurIn } from "@/components/ui/blur-in"
import { GradientText } from "@/components/ui/gradient-text"
import { ShineBorder } from "@/components/ui/shine-border"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { FaLinkedin } from 'react-icons/fa'
import { GradientTracing } from "@/components/ui/hero-tracing"
import { useState, useEffect } from 'react'

export default function About() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const createWavePath = () => {
    const points = [];
    const waves = 3;
    const amplitude = 40;
    
    for (let i = 0; i <= waves; i++) {
      const x1 = (i * windowWidth) / waves;
      const y = 50; // height/2
      const upDown = i % 2 === 0 ? 1 : -1;
      
      points.push(
        i === 0 
          ? `M${x1},${y}` 
          : `C${x1 - windowWidth/(waves*3)},${y + (amplitude * upDown)} ${x1 - windowWidth/(waves*4)},${y - (amplitude * upDown)} ${x1},${y}`
      );
    }
    return points.join(' ');
  };

  return (
    <section className="py-20 text-white relative">
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 flex items-start justify-center pointer-events-none" style={{ top: '90px' }}>
        <GradientTracing
          width={windowWidth}
          height={100}
          path={createWavePath()}
          gradientColors={["#ff40b3", "#4079ff", "#40ffaa"]}
          strokeWidth={2}
          animationDuration={12}
          baseColor="transparent"
          noTrail={true}
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="relative mb-12">
          <BlurIn 
            word={
              <GradientText
                colors={["#ff40b3", "#4079ff", "#40ffaa"]}
                animationSpeed={5}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold relative z-10"
              >
                About
              </GradientText>
            }
            duration={1.5}
            className="text-center relative"
          />
        </div>
        
        {/* Geri kalan içerik */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-48 h-48 flex-shrink-0 mx-auto md:mx-0 mb-12 md:mb-0" // mx-auto ve mb-12 eklendi
          >
            <Avatar className="w-full h-full">
              <AvatarImage src="/ben.jpg" alt="Profile" />
              <AvatarFallback>SZ</AvatarFallback>
            </Avatar>
            <div className="mt-4 flex justify-center">
              <a 
                href="https://www.linkedin.com/in/suzunn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl text-[#0077b5] hover:text-[#00a0dc] transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 mt-8 md:mt-0" // mt-8 eklendi
          >
            <ShineBorder
              borderRadius={16}
              borderWidth={2}
              duration={10}
              color={["#ff40b3", "#4079ff", "#40ffaa"]}
              className="w-full bg-black/20 backdrop-blur-md"
            >
              <div className="p-6 space-y-4">
                <p className="text-xl text-gray-300">
                  Hi! I'm Suleyman Arif Uzun, a Data Scientist and Deep Learning Researcher passionate about extracting insights from data and solving complex problems. I am currently pursuing a degree in Computer Science at Istanbul University, with a strong focus on machine learning and deep learning applications.
                </p>
                <p className="text-gray-400">
                  I completed an intensive Data Science Bootcamp under the mentorship of <a 
                    href="https://scholar.google.com/citations?user=A9nfTTsAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-300 hover:text-blue-100 transition-colors underline font-medium relative z-10 cursor-pointer"
                  ><strong>Chief Data Scientist Zafer Acar</strong></a>, where I specialized in deep learning techniques, including neural networks, CNNs, and RNNs. Throughout my journey, I have worked on real-world projects, leveraging tools like TensorFlow, Keras, and scikit-learn to build intelligent solutions.
                </p>
                <p className="text-gray-400">
                  Beyond technical expertise, I enjoy bridging the gap between data and decision-making through effective data visualization and storytelling. I am always eager to explore innovative approaches to problem-solving and collaborate on cutting-edge projects in AI and data science.
                </p>
                <p className="text-gray-400">
                  Let's connect and build something impactful together!
                </p>
              </div>
            </ShineBorder>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
