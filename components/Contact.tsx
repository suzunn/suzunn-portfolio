'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Interested in collaborating? Let's connect and create something amazing together.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-blue-500/50 backdrop-blur-sm text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600/50 transition-colors border border-blue-400"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
