"use client"

import React from "react"
import { motion } from "framer-motion"

interface GradientTracingProps {
  width: number
  height: number
  baseColor?: string
  gradientColors?: [string, string, string]
  animationDuration?: number
  strokeWidth?: number
  path?: string
  noTrail?: boolean // Yeni özellik
}

export const GradientTracing: React.FC<GradientTracingProps> = ({
  width,
  height,
  baseColor = "black",
  gradientColors = ["#2EB9DF", "#2EB9DF", "#9E00FF"],
  animationDuration = 2,
  strokeWidth = 2,
  path = `M0,${height / 2} L${width},${height / 2}`,
  noTrail = false, // Yeni prop
}) => {
  const gradientId = `pulse-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="relative" style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        {!noTrail && (
          <path
            d={path}
            stroke={baseColor}
            strokeOpacity="0.2"
            strokeWidth={strokeWidth}
          />
        )}
        <path
          d={path}
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <defs>
          <motion.linearGradient
            initial={{ x1: -width, x2: -width / 2 }}
            animate={{
              x1: [-width, width * 1.5],
              x2: [-width / 2, width * 2],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
            id={gradientId}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="transparent" />
            <stop offset="0.2" stopColor={gradientColors[0]} />
            <stop offset="0.5" stopColor={gradientColors[1]} />
            <stop offset="0.8" stopColor={gradientColors[2]} />
            <stop offset="1" stopColor="transparent" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}