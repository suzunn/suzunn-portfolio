"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode; // children prop'unu ekleyelim
}

export function Hero({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  actionsClassName,
  actions,
  children // children'ı props olarak alalım
}: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <section
        className={cn(
          "relative z-[100] flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-transparent", // Changed bg-background to bg-transparent
          "pt-20", // Add padding top for navbar
        )}
      >
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-[150] container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4 -translate-y-20"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
                titleClassName,
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "text-xl text-muted-foreground",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && (
              <div className={cn("flex gap-4 relative z-[200] pointer-events-auto", actionsClassName)} style={{position: 'relative'}}>
                {actions}
              </div>
            )}
            {children} {/* children'ı render edelim */}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
