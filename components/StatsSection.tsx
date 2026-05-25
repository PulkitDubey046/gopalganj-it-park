"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { useRef } from "react"

interface CounterProps {
  value: number
  suffix?: string
}

function AnimatedCounter({ value, suffix = "" }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, count, value])

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
  }, [rounded])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const stats = [
    { number: 22, suffix: "+ Yrs", label: "Successful Journey", sub: "Established in 2004" },
    { number: 5000, suffix: "+", label: "Students Trained", sub: "Digital Literacy & Skills" },
    { number: 98, suffix: "%", label: "Pass Rate", sub: "NIELIT & Government Exams" },
    { number: 100, suffix: "%", label: "Practical Focus", sub: "Modern Lab Assignments" }
  ]

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-orange-400 font-bold text-xs md:text-sm uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20 inline-block mb-3">
            Our Legacy Since 2004
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-snug">
            Established in <span className="text-yellow-400">2004</span>, we have been continuously shaping the future of students for over <span className="text-yellow-400">22 years</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm shadow-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 font-mono">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm md:text-base font-bold text-gray-100 tracking-wide">
                  {stat.label}
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-2 border-t border-white/5 pt-2">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}