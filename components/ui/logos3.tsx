'use client'

import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from './carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

const logos = [
  {
    category: "Programming",
    items: [
      { name: "Python", image: "/python.svg" },
    ]
  },
  {
    category: "Machine Learning",
    items: [
      { name: "TensorFlow", image: "/tensorflow.svg" },
      { name: "Keras", image: "/keras.svg" },
      { name: "Scikit-learn", image: "/scikitlearn.svg" },
    ]
  },
  {
    category: "Generative AI",
    items: [
      { name: "OpenAI", image: "/openai.svg" },
      { name: "LangChain", image: "/langchain.svg" },
      { name: "HuggingFace", image: "/huggingface.svg" },
      { name: "PyTorch", image: "/pytorch.svg" },
    ]
  },
  {
    category: "MLOps",
    items: [
      { name: "Docker", image: "/docker.svg" },
      { name: "FastAPI", image: "/fastapi.svg" },
      { name: "GitHub Actions", image: "/githubactions.svg" },
      { name: "AWS", image: "/amazonwebservices.svg" },
    ]
  },
  {
    category: "Data",
    items: [
      { name: "NumPy", image: "/numpy.svg" },
      { name: "Pandas", image: "/pandas.svg" },
      { name: "Plotly", image: "/plotly.svg" },
    ]
  }
]

export function LogoCarousel() {
  const plugin = React.useMemo(
    () => AutoScroll({  
      stopOnInteraction: false,
      direction: 'forward'
    }),
    []
  )

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-8 mt-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: 'rtl'
        }}
        plugins={[plugin]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4" dir="rtl">
          {logos.map((category) =>
            category.items.map((item) => (
              <CarouselItem 
                key={item.name} 
                className="pl-2 md:pl-4 basis-1/5 md:basis-[12.5%]"
                dir="ltr"
              >
                <div className="p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="mx-auto invert brightness-100 hover:brightness-125 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
