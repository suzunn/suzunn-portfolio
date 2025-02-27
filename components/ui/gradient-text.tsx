"use client"

import { cn } from "@/lib/utils"
import * as React from "react"

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  colors?: string[]
  animationSpeed?: number
  children: React.ReactNode
}

export function GradientText({
  children,
  className,
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  ...props
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  }

  return (
    <span
      className={cn("inline-block", className)}
      {...props}
    >
      <span
        className="inline-block text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </span>
    </span>
  )
}
