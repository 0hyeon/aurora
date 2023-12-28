import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './Stairs.module.scss'
import Link from 'next/link'
interface IAnim {
  [key: string]: {
    [key: string]: any
  }
}
export default function Stairs({ children }: { children: ReactNode }) {
  const anim = (variants: IAnim, custom?: any) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
      custom,
    }
  }
  const overlay = {
    initial: {
      opacity: 0.5,
    },
    enter: {
      opacity: 0,
    },
    exit: {
      opacity: 0.5,
    },
  }
  const expand = {
    initial: {
      top: 0,
    },
    enter: (i: number) => ({
      top: '100%',
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i: number) => ({
      height: '100%',
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
    }),
  }
  const nbOfColumns = 5
  return (
    <div className={[styles.page, styles.stairs].join(' ')}>
      <motion.div {...anim(overlay)} className={styles.background} />

      <div className={styles.transitionContainer}>
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div {...anim(expand, nbOfColumns - i)} key={i}></motion.div>
          )
        })}
      </div>
      {children}
    </div>
  )
}
