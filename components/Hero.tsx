'use client'
import { Hero as HeroBlock } from "@/components/blocks/hero"
import { GradientText } from "@/components/ui/gradient-text"
import { GradientTracing } from "@/components/ui/spiral"
import { ButtonColorful } from "@/components/ui/button-colorful"

export default function Hero() {
  return (
    <HeroBlock
      title={
        <div className="relative w-full" style={{ zIndex: 50 }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] -z-10 overflow-visible">
            <GradientTracing
              width={1000}
              height={1000}
              path={`M500,500 m-350,0 a350,350 0 1,0 700,0 a350,350 0 1,0 -700,0`}
              gradientColors={["#ff40b3", "#4079ff", "#40ffaa"]}
              strokeWidth={2}
              animationDuration={10}
              baseColor="transparent"
              noTrail={true} // Yeni özellik ekleyelim
            />
          </div>
          <span>
            Hi, I&apos;m{' '}
            <GradientText
              colors={["#ff40b3", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              className="inline-block"
            >
              suzunn
            </GradientText>
          </span>
        </div>
      }
      subtitle="Data Scientist | Python Developer"
      titleClassName="text-5xl md:text-7xl font-bold text-white"
      subtitleClassName="text-2xl md:text-3xl text-gray-300"
    >
      <div className="mt-8 relative" style={{ zIndex: 50 }}>
        <ButtonColorful 
          label="Contact Me" 
          href="mailto:suzunn3@gmail.com"
        />
      </div>
    </HeroBlock>
  )
}
