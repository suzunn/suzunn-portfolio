"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ShineBorder } from "@/components/ui/shine-border"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [,setIsMobile] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Add scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.querySelector(item.url) as HTMLElement);
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(items[index].name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  // Add navbar visibility control
  useEffect(() => {
    const handleScroll = () => {
      // 100px scroll sonrası navbar'ı göster
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const element = document.querySelector(url);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0", // left-1/2 ve -translate-x-1/2 kaldırıldı
        "w-full md:w-fit md:left-1/2 md:-translate-x-1/2", // Mobilde full width, desktop'ta ortalı
        "flex justify-center", // Flex container eklendi
        "transition-all duration-300",
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
      style={{ zIndex: 40 }}
    >
      <ShineBorder
        borderRadius={50}
        borderWidth={2}
        duration={10}
        color={["#ff40b3", "#4079ff", "#40ffaa"]}
        className="w-[95%] md:w-auto bg-background/5 backdrop-blur-lg pointer-events-auto" // w-[95%] eklendi
      >
        <div className="flex items-center justify-center gap-2 md:gap-3 py-1 px-1">
          {items.map((item) => {
            //const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  setActiveTab(item.name);
                  scrollToSection(e, item.url);
                }}
                className={cn(
                  "relative cursor-pointer text-sm font-bold px-3 md:px-6 py-2 rounded-full transition-colors", // Mobilde padding azaltıldı
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
      </ShineBorder>
    </div>
  )
}
