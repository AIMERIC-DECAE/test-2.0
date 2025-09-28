import { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'

type RevealProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements
  className?: string
  delay?: number
  y?: number
}>

const defaultTransition = {
  duration: 0.8,
  ease: [0.28, 0.11, 0.32, 1],
}

export function Reveal({ as = 'div', children, className, delay = 0, y = 28 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const MotionTag = motion[as as keyof typeof motion] ?? motion.div

  if (shouldReduceMotion) {
    return <MotionTag className={clsx(className)}>{children}</MotionTag>
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ...defaultTransition, delay }}
      className={clsx(className)}
    >
      {children}
    </MotionTag>
  )
}
